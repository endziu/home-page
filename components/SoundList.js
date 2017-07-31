const SoundList = ({ titles, itemClick, playClick, current, isPlaying }) => (
  <ul className="list ma2 pa0 white mw8 center">
    {titles.map((title, i, arr) => (
      <li key={i} className={i === current ? 'green' : ''}>
        <span
          onClick={itemClick.bind(null, i)}
          className="underline-hover hover-yellow pointer f4"
        >
          {title}
        </span>
        <span onClick={playClick} className="pointer f4 white">
          {i === current ? !isPlaying ? ' ▶️' : ' ⏸' : ''}
        </span>
      </li>
    ))}
  </ul>
);

export default SoundList;
