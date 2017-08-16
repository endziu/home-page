const { spawn } = require('child_process')
const sounds = require('./db/sounds.json')

console.log('spawning ffmpeg for: ')

const drawWaves = sound => {
  const draw = spawn(
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
    console.log(sound.sound_url)
  )
  draw.on(
    'close',
    code =>
      (code === 0
        ? console.log('done', sound.waveform_url)
        : console.log('process ended with', code))
  )
}

sounds.map(drawWaves)
