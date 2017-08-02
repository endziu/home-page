const fs = require('fs');

const printErrors = err => console.log(`we got a problem: ${err}`);

const readDirAsync = path =>
  new Promise((resolve, reject) =>
    fs.readdir(
      path,
      (err, data) => (err !== null ? reject(err) : resolve(data))
    )
  );

const generateData = listOfFiles =>
  listOfFiles.map((file, i, list) => ({
    title: `${file.replace('-', ' ').replace('.mp3', '')}`,
    waveform_url: `/waves/${file.replace('.mp3', '.png')}`,
    sound_url: `/sounds/${file}`
  }));

const writeFileAsync = data =>
  new Promise((resolve, reject) =>
    fs.writeFile('db/sounds.json', data, err => (err ? reject(err) : resolve()))
  );

module.exports = {
  printErrors,
  readDirAsync,
  generateData,
  writeFileAsync
};
