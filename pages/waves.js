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
    <ul className="list mv0 pl0">
      {wave_forms.map((url, i) => (
        <li className="h3 w-100 mw7 mb2 bl bw3 b--yellow">
          <img
            src={url}
            alt={`wave${i}`}
            key={i}
            className="h3 bg-light-yellow"
          />
          <div className="relative bottom-4 h3 w-75 bg-black-50 br bw1 b--red" />
        </li>
      ))}
    </ul>
    <style jsx>{`
      .bottom-4 {
        bottom: 4.21rem;
      }
    `}</style>
  </Layout>
);

Waves.getInitialProps = async function() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/lengths`);
  const data = await res.json();
  return { data };
};

export default Waves;
