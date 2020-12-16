export function getMockUrl( modelUrl: string ) {
  const mockUrl: string =
    modelUrl
      .replace( 'models', 'mocks' )
      .replace( '.ts', '.mock.ts' );
  
  return mockUrl
}

module.exports;