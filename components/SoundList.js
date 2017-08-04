import Link from 'next/link'

const SoundList = ({ tracks, itemClick, playClick, current, isPlaying }) => (
  <ul className="list ma2 pa0 white mw8 center">
    {tracks.map((title, i, arr) => (
      <li key={i} className={i === current ? 'green pb1-m' : 'pb1-m'}>
        <Link
          href={`/music?title=${title.permalink}`}
          as={`/music/${title.permalink}`}
        >
          <span>
            <a className="underline-hover hover-yellow pointer f4">
              {title.title}
            </a>
            {parseInt(i) === parseInt(current) &&
              <span onClick={playClick} className="pointer f4 white">
                {!isPlaying ? ' ▶️' : ' ⏸'}
              </span>}
          </span>
        </Link>
      </li>
    ))}
  </ul>
)

export default SoundList
