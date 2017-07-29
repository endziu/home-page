import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = ({ tracks }) => (
  <Layout>
    <ul className="list vh-100 pa0 ma0 mw7 overflow-auto">
      {tracks.map((track, i, arr) => (
        <li
          key={i}
          className={`pa3 ${i === arr.length - 1 ? 'pointer' : 'bb b--light-silver pointer'}`}
          style={{
            'background-image': `url("${track.waveform_url}")`,
            'background-size': '100% 100%'
          }}
        >
          <Link
            as={`/s/${track.permalink}`}
            href={`/sound?id=${track.permalink}`}
          >
            <span className="link underline-hover hover-red no-underline black-80 white truncate">
              {track.title}
            </span>
          </Link>

        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch(`${process.env.BACKEND_URL}/api`);
  const data = await res.json();
  return {
    tracks: data
  };
};

export default Index;
