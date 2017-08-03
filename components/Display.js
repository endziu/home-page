const Display = ({ waveform_url, playPos = 0, onClick }) => (
  <div
    id="wave"
    className="ma3 h3 h5-l h4-m mw8 relative center"
    onClick={onClick}
    style={{
      backgroundImage: `url("${waveform_url}")`,
      backgroundSize: '100% 100%'
    }}
  >
    <div
      className="h3 h5-l h4-m absolute bg-black-40"
      style={{
        width: `${playPos}%`,
        transition: 'all 0.1s ease-in-out'
      }}
    />
    <div
      className="h3 h5-l h4-m absolute bg-yellow"
      style={{
        width: '2px',
        left: `${playPos}%`,
        transition: 'all 0.1s ease-in-out'
      }}
    />
  </div>
)

export default Display
