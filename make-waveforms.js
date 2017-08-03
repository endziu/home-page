const { spawn } = require('child_process')
const sounds = require('./db/sounds.json')

console.log(sounds)

const ffmpeg = (sound, i, arr) => {
  spawn('ffmpeg', [
    '-y',
    '-i',
    sound.sound_url,
    '-filter_complex',
    'showwavespic=s=1024x120:colors=white',
    '-frames:v',
    '1',
    sound.waveform_url
  ])
}

sounds.map(ffmpeg)
