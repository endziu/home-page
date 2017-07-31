import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout.js';
import Player from '../components/Player.js';
import Display from '../components/Display.js';
import SoundList from '../components/SoundList.js';

class Index extends React.Component {
  static async getInitialProps() {
    const res = await fetch(`${process.env.BACKEND_URL}/api`);
    const data = await res.json();
    return {
      tracks: data
    };
  }

  constructor() {
    super();
    this.state = {
      currentTrack: 0,
      isPlaying: false,
      percentPlayed: 0
    };
    this.itemClick = this.itemClick.bind(this);
    this.playClick = this.playClick.bind(this);
    this.waveClick = this.waveClick.bind(this);
    this.updatePos = this.updatePos.bind(this);
  }

  itemClick(i) {
    this.setState({
      currentTrack: i,
      isPlaying: false
    });
  }

  playClick(e) {
    this.refs.player.setPlaybackPercent(0);
    this.refs.player.togglePlay();
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  waveClick(e) {
    const rect = document.getElementById('wave').getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    this.refs.player.setPlaybackPercent(ratio);
  }

  updatePos(e) {
    const duration = this.refs.player.audio.duration || 0;
    const currentTime = this.refs.player.audio.currentTime || 0;
    this.setState({
      percentPlayed: (currentTime / duration).toFixed(3) * 100 || 0
    });
  }

  render() {
    const track = this.props.tracks[this.state.currentTrack];
    const titles = this.props.tracks.map(track => track.title);
    return (
      <Layout>
        <Player
          ref="player"
          source={`${track.sound_url}`}
          preload={'metadata'}
          isPlaying={this.state.isPlaying}
          onTimeupdate={this.updatePos}
        />
        <Display
          waveform_url={`${track.wave_url}`}
          playPos={this.state.percentPlayed}
          onClick={this.waveClick}
        />
        <SoundList
          titles={titles}
          itemClick={this.itemClick}
          playClick={this.playClick}
          current={this.state.currentTrack}
          isPlaying={this.state.isPlaying}
        />
      </Layout>
    );
  }
}

export default Index;
