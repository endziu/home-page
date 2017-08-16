const fs = require('fs')

const printErrors = err => console.log(`we got a problem: ${err}`)

const readDirAsync = path =>
  new Promise((resolve, reject) =>
    fs.readdir(
      path,
      (err, data) => (err !== null ? reject(err) : resolve(data))
    )
  )

//.sort(() => Math.random() * 2 - 1)

const extractTitle = path =>
  path.split('-').join(' ').replace('.mp3', '').toLowerCase()
const extractWaveLink = path =>
  path.split(' ').join('-').replace('.mp3', '.png')
const extractLink = path => path.split(' ').join('-').replace('.mp3', '')
const formatUrl = path => path.split(' ').join('-')

const generateData = listOfFiles =>
  listOfFiles.map((path, i) => ({
    title: `${extractTitle(path)}`,
    permalink: `${extractLink(path)}`,
    waveform_url: `./public/waves/${extractWaveLink(path)}`,
    sound_url: `./public/sounds/${formatUrl(path)}`,
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
