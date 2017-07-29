import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const client_id = 'client_id=33c73dacce84dddddbc15117e071b6ce';

const Sound = props => (
  <Layout>
    <a
      href={`${process.env.BACKEND_URL}/api/${props.track.permalink}`}
      className="link pl2 white no-underline underline-hover hover-red"
    >
      {props.track.permalink}
    </a>
    <div className="w-100 mw8 pa2">
      <audio
        src={`${props.track.stream_url}?${client_id}`}
        controls
        className="w-100"
      />
    </div>
  </Layout>
);

Sound.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${process.env.BACKEND_URL}/api/${id}`);
  const track = await res.json();
  return { track };
};

export default Sound;
