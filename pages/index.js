import Layout from '../components/Layout.js'
import SvgLink from '../components/SvgLink.js'

const Index = props => (
  <Layout path={props.url.pathname}>
    <div className="pl2 white mw8 center">
      <h2 className="mv1">hello, I'm Andrzej Koper</h2>
      <div className="measure pa0">
        {`I make music, sounds and JavaScript.`}
        <hr />
        <p className="mv1">
          code I write is open source on
          {' '}
          <a
            target="_blank"
            href="https://github.com/endziu"
            className="link blue dim no-underline"
          >
            github
          </a>
          {'.'}
        </p>
        <p className="mv1">
          I tweet as
          {' '}
          <a
            target="_blank"
            href="https://twitter.com/1000machines"
            className="link blue dim no-underline"
          >
            @1000machines
          </a>
          {'. '}
        </p>
        <p className="mv1">
          I post music as
          {' '}
          <a
            href="https://soundcloud.com/abstract-machines"
            className="link blue dim no-underline"
          >
            @abstract-machines
          </a>
          {'.'}
        </p>
        <p className="mv1">
          I also host home sounds
          {' '}
          <a href="/music" className="link blue dim no-underline">
            here
          </a>
          {'. '}
        </p>
      </div>
    </div>
  </Layout>
)

export default Index
