const { spawn } = require('child_process')
const sounds = require('./db/sounds.json')

const ffmpeg = (sound, i, arr) => {
  spawn(
    'ffmpeg',
    [
      '-y',
      '-i',
      sound.sound_url,
      '-filter_complex',
      'showwavespic=s=1024x120:colors=white',
      '-frames:v',
      '1',
      sound.waveform_url
    ],
    console.log(sound)
  )
}

sounds.map(ffmpeg)
