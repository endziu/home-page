import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Info = props => (
  <Layout>
    <pre>
      there are: {props.data.length} tracks
    </pre>
  </Layout>
);

Info.getInitialProps = async function() {
  const res = await fetch(`${process.env.BACKEND_URL}/api`);
  const data = await res.json();
  return { data };
};

export default Info;
