import Layout from '../components/Layout.js'
import SvgLink from '../components/SvgLink.js'

const Index = props => (
  <Layout path={props.url.pathname}>
    <div className="pl2 white mw8 center">
      <h2 className="mv1">hello, I'm Andrzej Koper</h2>
      <div className="measure pa0">
        {`I do music, sound and JavaScript.`}
        <hr />
        {`some more text with extra info and links`}
      </div>
    </div>
  </Layout>
)

export default Index
