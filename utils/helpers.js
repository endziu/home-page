const fs = require('fs')

const printErrors = err => console.log(`we got a problem: ${err}`)

const readDirAsync = path =>
  new Promise((resolve, reject) =>
    fs.readdir(
      path,
      (err, data) => (err !== null ? reject(err) : resolve(data))
    )
  )

const generateData = listOfFiles =>
  listOfFiles.map(file => ({
    title: `${file.replace('-', ' ').replace('.mp3', '')}`,
    waveform_url: `./public/waves/${file.replace('.mp3', '.png')}`,
    sound_url: `./public/sounds/${file}`
  }))

const writeFileAsync = path => data =>
  new Promise((resolve, reject) =>
    fs.writeFile(
      path,
      JSON.stringify(data),
      err => (err ? reject(err) : resolve(data))
    )
  )

module.exports = {
  printErrors,
  readDirAsync,
  generateData,
  writeFileAsync
}
