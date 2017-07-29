import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const client_id = 'client_id=33c73dacce84dddddbc15117e071b6ce';

const Sound = props => (
  <Layout>
    <h4 className="underline-hover pointer">
      <a
        href={`${process.env.BACKEND_URL}/api/${props.track.permalink}`}
        className="link white no-underline pl2"
      >
        {props.track.permalink}
      </a>
    </h4>
    <div className="w-100 mw8 pa2">
      <div
        className="h3 bg-orange"
        style={{
          width: `${66.6}%`
        }}
      />
      <img
        className="w-100 h3 relative bottom-4"
        src={props.track.waveform_url}
        alt="wave"
      />
      <audio
        src={`${props.track.stream_url}?${client_id}`}
        controls
        className="w-100"
      />
    </div>
    <style jsx>{`
      .bottom-4 {
        bottom: 4rem;
      }
    `}</style>
  </Layout>
);

Sound.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`${process.env.BACKEND_URL}/api/${id}`);
  const track = await res.json();
  return { track };
};

export default Sound;
