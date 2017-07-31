const Display = ({ waveform_url, playPos = 0, onClick }) => (
  <div
    className="ma2 h3 mw7 relative"
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
        transition: 'all 0.125s ease-in'
      }}
    />
    <div
      className="h3 absolute bg-yellow"
      style={{
        width: '2px',
        left: `${playPos}%`,
        transition: 'all 0.125s ease-in'
      }}
    />
  </div>
);

export default Display;
