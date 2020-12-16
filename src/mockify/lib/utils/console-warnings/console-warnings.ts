export function consoleWarning(
  type: string,
  messageCode: string,
  params: string[]
) {
  if ( !messageCode ) { 
    type = 'error'
  }

  const colour: string = getColour( type )
  const prefix: string = getPrefix( type )
  const message: string = 
    getMessage(
      messageCode,
      params
    )
  
  console.warn(
    colour,
    prefix,
    message
  )
}

function getColour( type: string ): string {
  if ( type === 'SKIPPED' ) {
    return '\x1b[33m%s\x1b[0m';
  }
  if ( type === 'ERROR' ) {
    return '\x1b[31m%s\x1b[0m'
  }
  return '\x1b[0m'
}

function getPrefix( type: string ): string {
  if ( type === 'SKIPPED' ) {
    return 'SKIPPED';
  }
  if ( type === 'ERROR' ) {
    return 'ERROR'
  }
  return ''
}

function getMessage(
  messageCode: string,
  params: string[]
) {
  if ( messageCode === 'not-overwritten' ) {
    return `Existing ${ params[ 0 ] } found and not overwritten`;
  }
  if ( messageCode === 'constructor' ) {
    return `${ params[ 0 ] } : Constructor present in model file`;
  }
  if ( messageCode === 'class-name-empty' ) {
    return `Class name is empty`;
  }
  if ( messageCode === 'keys-empty' ) {
    return `${ params[ 0 ] } : Keys are empty, check for nested objects`;
  }
  if ( messageCode === 'generic-keys' ) {
    return `${ params[ 0 ] } : Generic syntax (e.g. [ key: string ]) not supported`;
  }
  return `Something went wrong`
}

module.exports;