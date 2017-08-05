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
  listOfFiles.sort(() => Math.random() * 2 - 1).map((path, i, arr) => ({
    title: `${path.split('-').join(' ').replace('.mp3', '').toLowerCase()}`,
    permalink: `${path.split(' ').join('-').replace('.mp3', '')}`,
    waveform_url: `./public/waves/${path
      .split(' ')
      .join('-')
      .replace('.mp3', '.png')}`,
    sound_url: `./public/sounds/${path.split(' ').join('-')}`,
    id: `${i}`
  }))

const writeFileAsync = path => data =>
  new Promise((resolve, reject) =>
    fs.writeFile(
      path,
      JSON.stringify(data),
      err => (err ? reject(err) : resolve(data))
    )
  )

readDirAsync('./public/sounds')
  .then(generateData)
  .then(writeFileAsync('db/sounds.json'))
  .catch(printErrors)
