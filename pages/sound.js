import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const client_id = 'client_id=33c73dacce84dddddbc15117e071b6ce';

const Sound = props => (
  <Layout>
    <a href={`${process.env.BACKEND_URL}/api/${props.track.permalink}`}>
      <h4 className="underline-hover pointer">{props.track.permalink}</h4>
    </a>
    <div className="w-third mw8 h3 bg-black-10 absolute" />
    <img className="w-100 mw8 h3" src={props.track.waveform_url} alt="wave" />
  </Layout>
);

Sound.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${process.env.BACKEND_URL}/api/${id}`);
  const track = await res.json();
  return { track };
};

export default Sound;
