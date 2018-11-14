import { withRouter } from "next/router"
import Layout from "../comps/Layout.js"
import sounds from "../db/tracks.json"
import {
  Play,
  Pause,
  Stop,
  NextTrack,
  PrevTrack,
  Repeat,
  Volume
} from "../comps/svgs.js"

const clamp = (n, l = sounds.length - 1) => {
  if (n <= 0) return 0
  if (n >= l) return l
  return n
}

class Music extends React.Component {
  static async getInitialProps({ query }) {
    const { ID } = query
    return { ID: ID || 0 }
  }

  constructor(props) {
    super(props)
    this.state = {
      sounds: sounds,
      current: 0,
      progress: 0,
      volume: 0.5,
      autoplay: true
    }

    this.audio = React.createRef()
    this.wave = React.createRef()
    this.volume = React.createRef()

    this.timeUpdate = this.timeUpdate.bind(this)
    this.waveClick = this.waveClick.bind(this)
    this.listClick = this.listClick.bind(this)
    this.loaded = this.loaded.bind(this)
    this.toggleAutoPlay = this.toggleAutoPlay.bind(this)
    this.setVolume = this.setVolume.bind(this)
    this.ended = this.ended.bind(this)
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)
  }

  loaded() {
    this.audio.current.currentTime = 0
    this.audio.current.volume = this.state.volume
    this.volume.current.value = Math.pow(this.state.volume, 0.5)
    this.state.autoplay && this.audio.current.play()
  }

  waveClick(e) {
    const rect = this.wave.current.getBoundingClientRect()
    const ratio = (e.clientX - rect.left) / rect.width
    this.audio.current.currentTime = ratio * this.audio.current.duration
  }

  listClick(i) {
    this.setState({ current: i, progress: 0 })
  }

  timeUpdate() {
    this.setState({
      progress: this.audio.current.currentTime / this.audio.current.duration ||
        0
    })
  }

  next() {
    this.setState(prevState => ({
      ...prevState,
      progress: 0,
      current: clamp(prevState.current + 1)
    }))
  }

  prev() {
    this.setState(prevState => ({
      ...prevState,
      progress: 0,
      current: clamp(prevState.current - 1)
    }))
  }

  ended() {
    this.state.autoplay && this.next()
  }

  toggleAutoPlay() {
    this.setState({ autoplay: !this.state.autoplay })
  }

  setVolume(e) {
    this.setState({ volume: Math.pow(e.currentTarget.value, 2) })
    this.audio.current.volume = Math.pow(e.currentTarget.value, 2)
  }

  render() {
    const { router } = this.props
    return (
      <Layout path={router.pathname}>
        <audio
          ref={this.audio}
          style={{ width: "100%" }}
          src={sounds[this.state.current].sound_url}
          onEnded={this.ended}
          onLoadedData={this.loaded}
          onTimeUpdate={this.timeUpdate}
          preload="metadata"
          volume={this.state.volume}
        />

        <section
          className="h4 mv3 mw8 center"
          ref={this.wave}
          onClick={this.waveClick}
        >
          <img
            className="w-100 h4"
            src={sounds[this.state.current].waveform_url}
          />
          <div
            className="br bw1 b--orange bg-black-10 h4"
            style={{
              position: "relative",
              top: "calc(-8rem - 3px)",
              width: `${this.state.progress.toFixed(3) * 100}%`,
              transition: "all 0.1s ease-in-out"
            }}
          />
        </section>

        <section className="mw8 center">
          <div id="controls">
            <a onClick={this.prev} className="link dim pointer">
              <PrevTrack />
            </a>

            <a onClick={this.next} className="link dim pointer">
              <NextTrack />
            </a>

            <a
              onClick={() => this.audio.current.play()}
              className="link dim pointer"
            >
              <Play />
            </a>

            <a
              onClick={() => this.audio.current.pause()}
              className="link dim pointer"
            >
              <Pause />
            </a>

            <a
              onClick={() => {
                this.audio.current.pause()
                this.audio.current.currentTime = 0
              }}
              className="link dim pointer"
            >
              <Stop />
            </a>
            <span style={{ position: "relative", top: "-4px" }} className="mr2">
              <Repeat />
              <input
                type="checkbox"
                onChange={this.toggleAutoPlay}
                checked={this.state.autoplay}
              />
            </span>

            <Volume />
            <input
              ref={this.volume}
              type="range"
              min="0"
              max="1.0"
              step="0.01"
              onChange={this.setVolume}
              className="mr2"
              style={{ position: "relative", top: "0px" }}
            />

          </div>

          <ul className="list mv3 pa0">
            {sounds.map((s, i) => (
              <li key={`#${i}`} className="mb1">
                <a
                  className={
                    this.state.current === i
                      ? "black hover-white bg-yellow ph3 link pointer f6 f5-m f4-l"
                      : "hover-white hover-bg-black-30 link pointer f6 f5-m f4-l"
                  }
                  onClick={this.listClick.bind(null, i)}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
}

export default withRouter(Music)
