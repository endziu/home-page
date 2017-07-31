const Display = ({ waveform_url, playPos = 0, onClick }) => (
  <div
    id="wave"
    className="ma2 h3 mw8 relative center"
    onClick={onClick}
    style={{
      backgroundImage: `url("${waveform_url}")`,
      backgroundSize: '100% 100%'
    }}
  >
    <div
      className="h3 absolute bg-black-40"
      style={{
        width: `${playPos}%`,
        transition: 'all 0.1s ease-in-out'
      }}
    />
    <div
      className="h3 absolute bg-yellow"
      style={{
        width: '2px',
        left: `${playPos}%`,
        transition: 'all 0.1s ease-in-out'
      }}
    />
  </div>
);

export default Display;
