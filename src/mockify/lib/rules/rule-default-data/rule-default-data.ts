import { Rule, SchematicContext, chain } from "@angular-devkit/schematics";
import { Tree } from "@angular-devkit/schematics/src/tree/interface";
import { AddCodeFromTemplateModel } from "../../../models/add-code-from-template.model";
import { addCodeFromTemplate } from "../rule-add-code-from-template/rule-add-code-from-template";

export function buildDefaultDataRule(
  className: string,
  keys: string[]
): Rule {
  return (
    tree: Tree,
    _context: SchematicContext
  ) => {

    let rulesFullModelFile: Rule[] = [];

    const defaultDataClassRule: Rule = getDefaultDataClassRule( className );
    rulesFullModelFile.push( defaultDataClassRule )

    for ( const key of keys ) {
      console.log( key, keys )
      const defaultDataKeyRule: Rule = getDefaultDataKeyRule( key )
      rulesFullModelFile.push( defaultDataKeyRule )
    }

    const defaultDataCloseCurlyBraceRule: Rule = getDefaultDataCloseCurlyBraceRule();
    rulesFullModelFile.push( defaultDataCloseCurlyBraceRule )

    // TODO remove
    tree
    
    return chain( rulesFullModelFile );
  };
}

function getDefaultDataClassRule( className: string ) {
    // Add class header
  const defaultDataClassConfig: AddCodeFromTemplateModel =
    {
      variables: {
        className
      },
      templatePathSegment: 'default-data-class-segment.ts.template',
      fileToUpdatePathSegment: 'key-segment.ts.template',
      formatting: {
        numLineBreaksBefore: 1
      }
    }

  return addCodeFromTemplate( defaultDataClassConfig )
}

function getDefaultDataKeyRule( key: string ) {
    // Add row for each key
  const defaultDataKeyConfig: AddCodeFromTemplateModel =
    {
      variables: {
        key
      },
      templatePathSegment: 'default-data-key-segment.ts.template',
      fileToUpdatePathSegment: 'key-segment.ts.template',
      formatting: {
        numLineBreaksBefore: 1
      }
    }

  return addCodeFromTemplate( defaultDataKeyConfig );
}

function getDefaultDataCloseCurlyBraceRule() {
    // Add row for each key
  const defaultDataKeyConfig: AddCodeFromTemplateModel =
    {
      templatePathSegment: 'default-data-close-curly-brace-segment.ts.template',
      fileToUpdatePathSegment: 'key-segment.ts.template',
      formatting: {
        numLineBreaksBefore: 1,
        numLineBreaksAfter: 1
      }
    }

  return addCodeFromTemplate( defaultDataKeyConfig );
}

module.exports;