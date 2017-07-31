var Waveform = require('node-waveform');
var fs = require('fs');

Waveform('./public/sounds/efix.mp3', options, function(err, buffer) {
  fs.writeFileSync('out.png', buffer);
});
