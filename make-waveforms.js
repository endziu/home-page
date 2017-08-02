const {
  readDirAsync,
  writeFileAsync,
  drawWaveform
} = require('./utils/helpers.js')
const files = readDirAsync('./public/sounds')

const options = {
  width: 1024,
  height: 64,
  baseline: 32,
  padding: 2,
  waveColor: 'white',
  backgroundColor: 'rgba(0,0,0,0)'
}

console.log(files)

readDirAsync('./public/sounds')
  .then(files => files.map(x => `/public/waves/${x.replace('.mp3', '.png')}`))
  .then(paths => paths.map(drawWaveform))
  .then(console.log)
