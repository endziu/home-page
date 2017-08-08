import Layout from '../components/Layout.js'
import fetch from 'isomorphic-unfetch'

const Index = props => (
  <Layout>
    <div className="pl2 white mw8 center flex flex-column">
      <pre>
        social
      </pre>
      <a
        href="https://twitter.com/1000machines"
        className="link pl2 white underline-hover hover-yellow"
      >
        twitter
      </a>
      <a
        href="https://github.com/endziu"
        className="link pl2 white underline-hover hover-yellow"
      >
        github
      </a>
      <a
        href="https://soundcloud.com/abstract-machines"
        className="link pl2 white underline-hover hover-yellow"
      >
        soundcloud
      </a>
      <a
        href="https://www.youtube.com/user/1000AbstractMachines"
        className="link pl2 white underline-hover hover-yellow"
      >
        youtube
      </a>
      <pre>
        web-dev
      </pre>
      <a
        href="https://dzwiekowamapa.pl"
        className="link pl2 white underline-hover hover-yellow"
      >
        sound map
      </a>
      <a
        href="https://endziu.xyz"
        className="link pl2 white underline-hover hover-yellow"
      >
        old home-page
      </a>
    </div>
  </Layout>
)

export default Index
