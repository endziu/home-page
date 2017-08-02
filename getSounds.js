const {
  printErrors,
  readDirAsync,
  writeFileAsync,
  generateData
} = require('./utils/helpers.js');

readDirAsync('./public/sounds')
  .then(generateData)
  .then(JSON.stringify)
  .then(writeFileAsync)
  .catch(printErrors);
