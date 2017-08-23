import Layout from '../components/Layout.js'
import SvgLink from '../components/SvgLink.js'

const Line = ({ text, href, link }) => (
  <p className="mv1">
    {text}
    <a target="_blank" href={href} className="link blue dim no-undeline">
      {link}
    </a>
  </p>
)

const Block = props => (
  <div className="measure">
    <hr />
    {props.children}
  </div>
)

const Index = props => (
  <Layout path={props.url.pathname}>
    <div className="pl2 white mw8 center">
      <header>
        <h2 className="f2 f1-m f-headline-l mv2 mv3-ns ml0 mh0">
          {`hello, I'm Andrzej`}
        </h2>
        <h2 className="ma0 f4 f3-ns mb4-l mb3-m mb2">
          {`I make music, sounds & JavaScript.`}
        </h2>
      </header>
      <Block>
        <div>
          <Line
            text={`code I write is open source on `}
            href={`https://github.com/endziu`}
            link={`github`}
          />
          <Line
            text={`I post music online as `}
            href={`https://soundcloud.com/abstract-machines`}
            link={`@abstract-machines`}
          />
          <Line
            text={`and I also keep some music over `}
            href={`/music`}
            link={`here`}
          />
          <Line
            text={`you can follow me on twitter `}
            href={`https://twitter.com/1000machines`}
            link={`@1000machines`}
          />
        </div>
      </Block>

      <Block>
        <div>
          <Line text={`I support cryptocurrencies:`} />
          <Line
            text={`bitcoin: `}
            href={`/imgs/btc-qr-code.png`}
            link={`1qa4xA4DXR26oPhXXAvy9ivByDYXkmhpU`}
          />
          <Line
            text={`ethereum: `}
            href={`/imgs/eth-qr-code.png`}
            link={`0xc3adab50c47b3d9c3342d71202838ddb5f09a050`}
          />
        </div>
      </Block>

      <Block>
        <Line
          text={`feel free to send me an `}
          href={`mailto:koper.andzrzej@gmail.com`}
          link={`email`}
        />
      </Block>

    </div>
  </Layout>
)

export default Index
