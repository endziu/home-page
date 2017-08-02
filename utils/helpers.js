const fs = require('fs');

const printErrors = err => console.log(`we got a problem: ${err}`);

const readDirAsync = path => {
  return new Promise(function(resolve, reject) {
    fs.readdir(path, function(err, data) {
      if (err !== null) {
        return reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const generateData = listOfFiles => {
  return listOfFiles.map((file, i, list) => {
    return {
      title: `${file.replace('-', ' ').replace('.mp3', '')}`,
      waveform_url: `/waves/${file.replace('.mp3', '.png')}`,
      sound_url: `/sounds/${file}`
    };
  });
};

const writeFileAsync = data => {
  return new Promise(function(resolve, reject) {
    fs.writeFile('db/sounds.json', data, function(err) {
      if (err) {
        return reject(err);
      } else {
        console.log('file saved');
        return resolve();
      }
    });
  });
};

module.exports = {
  printErrors,
  readDirAsync,
  generateData,
  writeFileAsync
};
