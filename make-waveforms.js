const { writeFileAsync, drawWaveform } = require('./utils/helpers.js')
const files = fs.readdirSync('./public/sounds')

const options = {
  width: 1024,
  height: 64,
  baseline: 32,
  padding: 2,
  waveColor: 'white',
  backgroundColor: 'rgba(0,0,0,0)'
}

console.log(files)

files.map(drawWaveform).then(writeFileAync)
