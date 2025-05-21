import { Schema } from './schema.d';
import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';
// Path from @angular-devkit/core might be deprecated or handled as string.
import MockifyModel from './models/mockify.model';
import getClassNameAndKeys from './utils/get-class-name-and-keys/get-class-name-and-keys'
import MoveFileModel from '../generic/models/move-file.model';
import buildWithBlocksRule from './rules/rule-with-blocks/rule-with-blocks'
import buildExportClassRule from './rules/rule-export-class/rule-export-class'
import buildDefaultDataRule from './rules/rule-default-data/rule-default-data'
import buildModelFunctionRule from './rules/rule-model-function/rule-model-function'
import buildCloseCurlyBraceRule from './rules/rule-close-curly-brace/rule-close-curly-brace'
import moveFile from '../generic/rules/files/rule-move-file/rule-move-file';
import startProgressBar from '../generic/rules/progress-bar/rule-start-progress-bar/rule-start-progress-bar';
import incrementProgressBar from '../generic/rules/progress-bar/rule-increment-progress-bar/rule-increment-progress-bar';
import stopProgressBar from '../generic/rules/progress-bar/rule-stop-progress-bar/rule-stop-progress-bar';
import createProgressBar from '../generic/rules/progress-bar/create-progress-bar/create-progress-bar';
import displayConsoleWarnings from '../generic/utils/console-warnings/rule-display-console-warnings';
import ConsoleWarningTypesEnum from '../generic/enums/console-warning-types.enum';
import buildAddImportsRule from './rules/rule-add-imports/rule-add-imports';
import skipInvalidFileType from './rules/rule-skip-invalid-file-type/rule-skip-invalid-file-type';
import addConsoleWarningMockify from './utils/console-warnings/console-warnings';


export function mockify( _options: Schema ): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ) => {
    // Ensure modelsFolderUrl and mocksFolderUrl are consistently handled (e.g. without leading './')
    const modelsFolderUrlInput: string = _options.modelsFolderUrl || './models/';
    const mocksFolderUrlInput: string = _options.mocksFolderUrl || './models/mocks/';
    const overwriteExisting: boolean = _options.overwriteExisting || false;
    const withImports: boolean = _options.withImports || false;
    const rulesFullModelFolder: Rule[] = [];

    // Normalize folder URLs (remove leading './' and ensure trailing '/')
    const normalizePath = (path: string): string => {
      let p = path.startsWith('./') ? path.substring(2) : path;
      if (!p.endsWith('/')) {
        p += '/';
      }
      return p;
    };

    const modelsFolderUrl = normalizePath(modelsFolderUrlInput);
    const mocksFolderUrl = normalizePath(mocksFolderUrlInput);

    const isModelFile: ( modelFileUrl: string ) => boolean = ( modelFileUrl: string ) => modelFileUrl.endsWith( '.model.ts' );
    const isMockFile: ( modelFileUrl: string ) => boolean = ( modelFileUrl: string ) => modelFileUrl.endsWith( '.mock.ts' );

    const progressBar: any = createProgressBar();
    const ruleStartProgressBar: Rule =
      startProgressBar(
        progressBar,
        modelsFolderUrlInput // Original input for progress bar display
      );
    rulesFullModelFolder.push( ruleStartProgressBar );

    tree
      .getDir( modelsFolderUrl ) // Use normalized modelsFolderUrl for Tree API
      .visit( 
        ( filePath: string ) => { // fileUrl is a string path from the tree root
          // filePath is like 'src/app/models/user.model.ts'
          // modelsFolderUrl is like 'src/app/models/'
          // We want fileSegmentUrl to be 'user.model.ts' or 'subfolder/user.model.ts'
          let fileSegmentUrl = filePath;
          if (filePath.startsWith(modelsFolderUrl)) {
            fileSegmentUrl = filePath.substring(modelsFolderUrl.length);
          }

          // Check if the file is directly in the modelsFolderUrl, not a sub-directory of a mock file moved earlier
          // This logic might need refinement if modelsFolderUrl and mocksFolderUrl can overlap in complex ways.
          // For now, assume distinct target locations or that isMockFile/isModelFile correctly distinguishes.

          if ( isMockFile( filePath ) ) { // Use filePath (full path) for isMockFile
            const moveMockFileConfig: MoveFileModel =
              {
                fileSegmentUrl, // This is now relative to modelsFolderUrl
                sourceFolderUrl: modelsFolderUrl, // Normalized
                targetFolderUrl: mocksFolderUrl // Normalized
              };

            const ruleMoveMockFile: Rule = moveFile( moveMockFileConfig );
            rulesFullModelFolder.push( ruleMoveMockFile );
          }

          else if ( isModelFile( fileSegmentUrl ) ) { // Use fileSegmentUrl for isModelFile
            const mockifyConfig: MockifyModel =
              {
                fileSegmentUrl, // Relative to modelsFolderUrl
                modelsFolderUrl: modelsFolderUrl, // Normalized
                mocksFolderUrl: mocksFolderUrl, // Normalized
                overwriteExisting,
                withImports
              }

            const ruleMockifyFile: Rule = mockifyFile( mockifyConfig )
            rulesFullModelFolder.push( ruleMockifyFile )
          }

          else {
            const ruleSkipUnhandledFileType: Rule = skipInvalidFileType( fileSegmentUrl );
            rulesFullModelFolder.push( ruleSkipUnhandledFileType )
          }

          const ruleIncrementProgressBar: Rule = incrementProgressBar( progressBar );
          rulesFullModelFolder.push( ruleIncrementProgressBar );
        }
      )

    const ruleStopProgressBar: Rule = stopProgressBar( progressBar )
    rulesFullModelFolder.push( ruleStopProgressBar )

    const ruleDisplayConsoleWarnings: Rule = displayConsoleWarnings();
    rulesFullModelFolder.push( ruleDisplayConsoleWarnings )

    return chain( rulesFullModelFolder )( tree, context )
  }
}

function mockifyFile( mockifyConfig: MockifyModel ): Rule {
  return (
    tree: Tree,
    context: SchematicContext
  ): Rule | void => { // Added return type for clarity
    const {
      fileSegmentUrl, // Relative path, e.g., user.model.ts or sub/user.model.ts
      modelsFolderUrl, // Normalized, e.g., src/app/models/
      mocksFolderUrl, // Normalized, e.g., src/app/mocks/
      overwriteExisting,
      withImports   
    } = mockifyConfig;

    const mockFileSegmentUrl: string = fileSegmentUrl.replace( '.ts', '.mock.ts' );
    // modelUrl should be modelsFolderUrl + fileSegmentUrl
    const modelUrl: string = `${modelsFolderUrl}${fileSegmentUrl}`;
    // mockUrl should be mocksFolderUrl + mockFileSegmentUrl
    const mockUrl: string = `${mocksFolderUrl}${mockFileSegmentUrl}`;

    const modelFileBuffer = tree.read( modelUrl );
    if (modelFileBuffer === null) {
      context.logger.warn(`Model file not found at ${modelUrl}. Skipping mock generation.`);
      return; // Return void or a noop Rule
    }
    const modelFileText: string = modelFileBuffer.toString('utf-8');

    const {
      className,
      keys
    } = getClassNameAndKeys( modelFileText );

    if (
      !className
      || !keys
    ) {
      // If className or keys are not found, log a warning and skip.
      context.logger.warn(`Could not extract className or keys from ${modelUrl}. Skipping mock generation.`);
      return; // Return void or a noop Rule
    }

    if ( tree.exists( mockUrl ) ) {
      if ( !overwriteExisting ) {
        addConsoleWarningMockify(
          ConsoleWarningTypesEnum.ignore,
          'not-overwritten',
          { className }
        );
        return; // Return void or a noop Rule
      }
      else {
        tree.delete( mockUrl )
      }
    }
    tree.create( mockUrl, '' )

    const ruleExportClass: Rule = buildExportClassRule( mockUrl, className );
    const ruleDefaultData: Rule = buildDefaultDataRule( mockUrl, className, keys );
    const ruleWithBlocks: Rule = buildWithBlocksRule( mockUrl, className, keys );
    const ruleModelFunction: Rule = buildModelFunctionRule( mockUrl, className );
    const ruleCloseCurlyBrace: Rule = buildCloseCurlyBraceRule( mockUrl );

    const rulesFullModelFile: Rule[] =
      [
        ruleExportClass,
        ruleDefaultData,
        ruleWithBlocks,
        ruleModelFunction,
        ruleCloseCurlyBrace
      ];

    if ( withImports ) {
      // Pass the original modelsFolderUrlInput if sub-rules expect it, or normalized if they are adapted
      const ruleAddImports: Rule = buildAddImportsRule( mockUrl, className, keys, modelsFolderUrl ); // Using normalized
      rulesFullModelFile.push( ruleAddImports );
    }

    return chain( rulesFullModelFile )( tree, context );
  }
}
