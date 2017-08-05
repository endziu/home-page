import Link from 'next/link'

const SoundList = ({ tracks, playClick, current, isPlaying }) => (
  <ul className="list ma2 pa0 white mw8 center">
    {tracks.map((t, i, arr) => (
      <li key={i}>
        <Link href={`/music?title=${t.permalink}`} as={`/music/${t.permalink}`}>
          <a
            className={
              parseInt(i) === parseInt(current)
                ? 'green link underline-hover pointer f4'
                : 'white link underline-hover hover-yellow pointer f4'
            }
          >
            {t.title}
          </a>
        </Link>
        {parseInt(i) === parseInt(current) &&
          <a onClick={playClick} className="pointer f4 white">
            {!isPlaying ? ' ▶️' : ' ⏸'}
          </a>}
      </li>
    ))}
  </ul>
)

export default SoundList
