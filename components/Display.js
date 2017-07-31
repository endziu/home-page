const Display = ({ waveform_url, playPos = 40 }) => (
  <div
    className="ma2 h3 mw6 relative"
    style={{
      backgroundImage: `url("${waveform_url}")`,
      backgroundSize: '100% 100%'
    }}
  >
    <div
      className="h3 absolute bg-black"
      style={{ width: '3px', left: `${playPos}%` }}
    />
  </div>
);

export default Display;
