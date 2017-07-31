import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

const Info = props => (
  <Layout>
    <pre className="pl2 white">
      testing testing 1 2 3...
    </pre>
  </Layout>
);

Info.getInitialProps = async function() {
  const res = await fetch(`${process.env.BACKEND_URL}/api`);
  const data = await res.json();
  return { data };
};

export default Info;
