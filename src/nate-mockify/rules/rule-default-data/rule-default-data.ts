import { Rule, SchematicContext, chain, Tree } from "@angular-devkit/schematics";
import AddCodeFromTemplateModel from "../../../generic/models/add-code-from-template.model";
import addCodeFromTemplate from "../../../generic/rules/files/rule-add-code-from-template/rule-add-code-from-template";

export default function buildDefaultDataRule(
  mockUrl: string,
  className: string,
  keys: string[]
): Rule {
  return (
    _tree: Tree,
    _context: SchematicContext
  ) => {

    let rulesFullModelFile: Rule[] = [];

    const defaultDataClassRule: Rule = getDefaultDataClassRule( mockUrl, className );
    rulesFullModelFile.push( defaultDataClassRule )

    for ( const key of keys ) {
      const defaultDataKeyRule: Rule = getDefaultDataKeyRule( mockUrl, key )
      rulesFullModelFile.push( defaultDataKeyRule )
    }

    const defaultDataCloseCurlyBraceRule: Rule = getDefaultDataCloseCurlyBraceRule( mockUrl );
    rulesFullModelFile.push( defaultDataCloseCurlyBraceRule )
    
    return chain( rulesFullModelFile );
  };
}

function getDefaultDataClassRule(
  mockUrl: string,
  className: string
) {
  const defaultDataClassConfig: AddCodeFromTemplateModel =
    {
      variables: {
        className
      },
      templatePathSegment: 'default-data-class-segment.ts.template',
      fileToUpdatePathSegment: mockUrl,
      formatting: {
        numLineBreaksBefore: 1
      }
    }

  return addCodeFromTemplate( defaultDataClassConfig )
}

function getDefaultDataKeyRule(
  mockUrl: string,
  key: string
) {
  const defaultDataKeyConfig: AddCodeFromTemplateModel =
    {
      variables: {
        key
      },
      templatePathSegment: 'default-data-key-segment.ts.template',
      fileToUpdatePathSegment: mockUrl,
      formatting: {
        numLineBreaksBefore: 1
      }
    }

  return addCodeFromTemplate( defaultDataKeyConfig );
}

function getDefaultDataCloseCurlyBraceRule( mockUrl: string ) {
  const defaultDataKeyConfig: AddCodeFromTemplateModel =
    {
      templatePathSegment: 'default-data-close-curly-brace-segment.ts.template',
      fileToUpdatePathSegment: mockUrl,
      formatting: {
        numLineBreaksBefore: 1,
        numLineBreaksAfter: 2
      }
    }

  return addCodeFromTemplate( defaultDataKeyConfig );
}
