import Link from 'next/link'

const SoundList = ({ tracks, itemClick, playClick, current, isPlaying }) => (
  <ul className="list ma2 pa0 white mw8 center">
    {tracks.map((title, i, arr) => (
      <li key={i} onClick={itemClick}>
        <Link
          href={`/music?title=${title.permalink}`}
          as={`/music/${title.permalink}`}
        >
          <a
            className={
              parseInt(i) === parseInt(current)
                ? 'green link underline-hover pointer f4'
                : 'white link underline-hover hover-yellow pointer f4'
            }
          >
            {title.title}
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
