import { Tree } from "@angular-devkit/schematics/src/tree/interface"

export function createBlankFile(
  tree: Tree,
  mockUrl: string
) {
  if ( tree.exists( mockUrl ) ) {
    tree.delete( mockUrl )
  }
  tree.create( mockUrl, '' )
}

module.exports;