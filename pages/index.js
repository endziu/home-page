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
      isPlaying: false
    };
    this.itemClick = this.itemClick.bind(this);
    this.playClick = this.playClick.bind(this);
  }

  itemClick(e) {
    this.setState({
      currentTrack: e,
      isPlaying: false
    });
  }

  playClick(e) {
    this.state.isPlaying
      ? this.refs.player.audio.pause()
      : this.refs.player.audio.play();
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  render() {
    const track = this.props.tracks[this.state.currentTrack];
    const titles = this.props.tracks.map(t => t.permalink);
    return (
      <Layout>
        <Player
          ref="player"
          source={
            track.stream_url + '?client_id=33c73dacce84dddddbc15117e071b6ce'
          }
          preload={'metadata'}
          isPlaying={this.state.isPlaying}
        />
        <Display waveform_url={track.waveform_url} />
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
