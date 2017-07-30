const SoundList = ({ titles, itemClick, current }) => (
  <ul className="list ma2 pa0 white">
    {titles.map((title, i, arr) => (
      <li
        key={i}
        onClick={itemClick.bind(null, i)}
        className={
          i === current
            ? 'underline-hover red pointer'
            : 'underline-hover hover-green pointer'
        }
      >
        {title}
      </li>
    ))}
  </ul>
);

export default SoundList;
