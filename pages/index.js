import Layout from '../components/Layout.js';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = ({ tracks }) => (
  <Layout>
    <ul className="list pl0 ml0 mw6 bl bw1 b--green">
      {tracks.map((track, i, arr) => (
        <li
          key={i}
          className={`pa2 ${i === arr.length - 1 ? '' : 'bb b--light-silver'}`}
        >
          <Link
            as={`/s/${track.permalink}`}
            href={`/sound?id=${track.permalink}`}
          >
            <a className="link no-underline black-80 hover-red">
              {track.title}
            </a>
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
