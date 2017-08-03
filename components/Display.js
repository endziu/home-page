const Display = ({ waveform_url, playPos = 0, onClick, time = '0:00' }) => (
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
    >
      <div
        className={
          playPos < 50
            ? 'absolute bottom-0 pl2 white f6'
            : 'absolute bottom-0 right-0 pr2 pb1 white f6'
        }
      >
        {time}
      </div>
    </div>
  </div>
)

export default Display
