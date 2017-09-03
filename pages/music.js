import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import Layout from '../components/Layout.js'
import Player from '../components/Player.js'
import Display from '../components/Display.js'
import SoundList from '../components/SoundList.js'

const findID = (permalink, list) => {
  const sound = list.filter(el => el.permalink === permalink)[0]
  if (sound) {
    return sound.id
  } else {
    return -1
  }
}

export default class Music extends React.Component {
  static async getInitialProps(context) {
    console.log(`${process.env.BACKEND_URL}/api`)
    const { title } = context.query
    const res = await fetch(`${process.env.BACKEND_URL}/api`)
    const data = await res.json()
    const permalink = title || '110untunednobassmix'
    return {
      tracks: data,
      permalink: permalink
    }
  }

  constructor() {
    super()
    this.state = {
      currentTrack: 0,
      currentTime: '0:00',
      isPlaying: false,
      percentPlayed: 0
    }
    this.playClick = this.playClick.bind(this)
    this.waveClick = this.waveClick.bind(this)
    this.updatePos = this.updatePos.bind(this)
    this.onEnded = this.onEnded.bind(this)
  }

  componentWillMount() {
    console.log(process.env.BACKEND_URL)
    const id = findID(this.props.permalink, this.props.tracks)
    this.setState({
      currentTrack: id
    })
  }

  componentWillReceiveProps(props) {
    const id = findID(props.permalink, props.tracks)
    this.setState(prevState => ({
      currentTrack: id,
      isPlaying: prevState.isPlaying
        ? id === prevState.currentTrack ? true : false
        : false
    }))
  }

  playClick(e) {
    this.refs.player.setPlaybackPercent(0)
    this.refs.player.togglePlay()
    this.setState(prevState => ({ isPlaying: !prevState.isPlaying }))
  }

  waveClick(e) {
    const rect = document.getElementById('wave').getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    this.refs.player.setPlaybackPercent(ratio)
    this.refs.player.audio.play()
    this.setState({
      isPlaying: true
    })
  }

  updatePos(e) {
    const date = new Date(null)

    const duration = this.refs.player.audio.duration || 0
    const currentTime = this.refs.player.audio.currentTime || 0

    const seconds = date.setSeconds(currentTime)
    const time = date.toISOString().substr(14, 5)

    this.setState({
      percentPlayed: (currentTime / duration).toFixed(3) * 100 || 0,
      currentTime: time
    })
  }

  onEnded() {
    this.setState({
      isPlaying: false,
      percentPlayed: 0
    })
  }

  render() {
    const track = this.props.tracks[this.state.currentTrack]
    return (
      <Layout path={this.props.url.pathname}>
        <Player
          ref="player"
          source={`${track.sound_url.substr(8)}`}
          preload={'metadata'}
          isPlaying={this.state.isPlaying}
          onTimeupdate={this.updatePos}
          onEnded={this.onEnded}
        />
        <Display
          time={this.state.currentTime}
          waveform_url={`${track.waveform_url.substr(8)}`}
          playPos={this.state.percentPlayed}
          waveClick={this.waveClick}
        />
        <SoundList
          tracks={this.props.tracks}
          playClick={this.playClick}
          current={this.state.currentTrack}
          isPlaying={this.state.isPlaying}
        />
      </Layout>
    )
  }
}
