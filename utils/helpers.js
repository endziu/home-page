const fs = require('fs')
var Waveform = require('node-wave')

const printErrors = err => console.log(`we got a problem: ${err}`)

const readDirAsync = path =>
  new Promise((resolve, reject) =>
    fs.readdir(
      path,
      (err, data) => (err !== null ? reject(err) : resolve(data))
    )
  )

const options = {
  width: 1024,
  height: 64,
  baseline: 32,
  padding: 2,
  waveColor: 'white',
  backgroundColor: 'rgba(0,0,0,0)'
}

const drawWaveform = path =>
  new Promise((resolve, reject) =>
    Waveform(
      path,
      options,
      (err, buf) => (err !== null ? reject(err) : resolve(buf))
    )
  )

const generateData = listOfFiles =>
  listOfFiles.map(file => ({
    title: `${file.replace('-', ' ').replace('.mp3', '')}`,
    waveform_url: `/waves/${file.replace('.mp3', '.png')}`,
    sound_url: `/sounds/${file}`
  }))

const writeFileAsync = path => data =>
  new Promise((resolve, reject) =>
    fs.writeFile(path, data, err => (err ? reject(err) : resolve(data)))
  )

module.exports = {
  printErrors,
  readDirAsync,
  generateData,
  writeFileAsync,
  drawWaveform
}
