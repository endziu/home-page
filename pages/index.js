import Layout from '../components/Layout.js'
import SvgLink from '../components/SvgLink.js'

const Index = () => (
  <Layout>
    <div className="pl2 white mw8 center">
      <h2 className="mv1">hello, I'm Andrzej</h2>
      <div className="measure pa0 hide-child">
        {`I do music, sound and JavaScript.`}
        <SvgLink />
      </div>
    </div>
  </Layout>
)

export default Index
