//var Waveform = require('node-wave');
var fs = require('fs');

const files = fs.readdirSync('./public/sounds');

const options = {
  width: 1024,
  height: 64,
  baseline: 32,
  padding: 2,
  waveColor: 'white',
  backgroundColor: 'rgba(0,0,0,0)'
};

console.log(files);

/*
files.forEach((file, i, arr) => {
  Waveform(`./public/sounds/${file}`, options, (err, buffer) => {
    fs.writeFileSync(`./public/waves/${file.replace('.mp3', '.png')}`, buffer);
  });
});
*/
