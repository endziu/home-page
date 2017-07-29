import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const wave_forms = [
  'http://res.cloudinary.com/endziu/video/upload/h_64,w_768,fl_waveform,co_black,b_none/v1501322133/sounds/lengths.png',
  'http://res.cloudinary.com/endziu/video/upload/h_64,w_768,fl_waveform,co_black,b_none/v1501322133/sounds/untuned_garden.png',
  'http://res.cloudinary.com/endziu/video/upload/h_64,w_768,fl_waveform,co_black,b_none/v1501322133/sounds/binary_blob.png',
  'http://res.cloudinary.com/endziu/video/upload/h_64,w_768,fl_waveform,co_black,b_none/v1501322133/sounds/micro_situations.png',
  'http://res.cloudinary.com/endziu/video/upload/h_64,w_768,fl_waveform,co_black,b_none/v1501322133/sounds/kliks_radio.png',
  'http://res.cloudinary.com/endziu/video/upload/h_64,w_768,fl_waveform,co_black,b_none/v1501322133/sounds/efix.png',
  'http://res.cloudinary.com/endziu/video/upload/h_64,w_768,fl_waveform,co_black,b_none/v1501322133/sounds/prep2.png',
  'http://res.cloudinary.com/endziu/video/upload/h_64,w_768,fl_waveform,co_black,b_none/v1501322133/sounds/110untunednobassmix.png'
];

const Waves = props => (
  <Layout>
    <div className="bg-washed-yellow">
      <ul className="list">
        {wave_forms.map((url, i) => (
          <li className="pa2 bl bw4 b--green">
            <img
              src={url}
              alt={`wave${i}`}
              key={i}
              className={i === 0 ? 'bb bt b-black' : 'bb b--black'}
            />
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

Waves.getInitialProps = async function() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/lengths`);
  const data = await res.json();
  return { data };
};

export default Waves;
