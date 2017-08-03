const utils = require('./utils/helpers.js')
const { printErrors, readDirAsync, writeFileAsync, generateData } = utils

readDirAsync('./public/sounds')
  .then(generateData)
  .then(writeFileAsync('db/sounds.json'))
  .catch(printErrors)