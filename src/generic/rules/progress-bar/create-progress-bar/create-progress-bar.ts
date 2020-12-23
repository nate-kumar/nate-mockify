const cliProgress = require( 'cli-progress' );

export default function createProgressBar(): any {
  const progressBar: any =
    new cliProgress.SingleBar(
      {}, 
      cliProgress.Presets.shades_classic
    );

  return progressBar
}

module.exports;