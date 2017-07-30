const Display = ({ waveform_url }) => (
  <div
    className="ma2 h3 mw6"
    style={{
      backgroundImage: `url("${waveform_url}")`,
      backgroundSize: '100% 100%'
    }}
  />
);

export default Display;
