import Link from 'next/link'

const Item = ({ children }) => (
  <li>
    {children}
  </li>
)

const Title = ({ track, i, current }) => (
  <Link
    href={`/music?title=${track.permalink}`}
    as={`/music/${track.permalink}`}
  >
    <a
      className={
        parseInt(i) === parseInt(current)
          ? 'green link underline-hover pointer f4'
          : 'white link underline-hover hover-yellow pointer f4'
      }
    >
      {track.title}
    </a>
  </Link>
)

const PlayButton = ({ isPlaying, playClick, i, current }) => (
  <span>
    {parseInt(i) === parseInt(current) &&
      <a onClick={playClick} className="pointer f4 white">
        {!isPlaying ? ' ▶️' : ' ⏸'}
      </a>}
  </span>
)

const makeItem = (current, isPlaying, playClick) => (t, i, arr) => (
  <Item key={i}>
    <Title track={t} i={i} current={current} />
    <PlayButton
      i={i}
      current={current}
      isPlaying={isPlaying}
      playClick={playClick}
    />
  </Item>
)

const SoundList = ({ tracks, playClick, current, isPlaying }) => (
  <ul className="list ma2 pa0 white mw8 center">
    {tracks.map(makeItem(current, isPlaying, playClick))}
  </ul>
)

export default SoundList
