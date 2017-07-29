import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = ({ tracks }) => (
  <Layout>
    <ul className="list list-h pa1 mt0 mw7 overflow-y-auto">
      {tracks.map((track, i, arr) => (
        <li
          key={i}
          className={`pa3 ${i === arr.length - 1 ? 'pointer mb2' : 'bb b--light-silver pointer mb2 truncate'}`}
          style={{
            'background-image': `url("${track.waveform_url}")`,
            'background-size': '100% 100%'
          }}
        >
          <Link
            as={`/s/${track.permalink}`}
            href={`/sound?id=${track.permalink}`}
          >
            <span className="link underline-hover hover-green no-underline bg-black-20 white truncate">
              {track.title}
            </span>
          </Link>

        </li>
      ))}
      <style jsx>{`
        .list-h {
          height: calc(100vh - 52px)
        }
      `}</style>
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
