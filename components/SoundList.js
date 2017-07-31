const SoundList = ({ titles, itemClick, playClick, current, isPlaying }) => (
  <ul className="list ma2 pa0 white">
    {titles.map((title, i, arr) => (
      <li key={i} className={i === current ? 'red' : ''}>
        <span
          onClick={itemClick.bind(null, i)}
          className="underline-hover hover-green pointer f4"
        >
          {title}
        </span>
        <span onClick={playClick} className="pointer f4">
          {i === current ? !isPlaying ? ' ▶' : ' ⏸' : ''}
        </span>
      </li>
    ))}
  </ul>
);

export default SoundList;
