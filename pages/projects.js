import Layout from '../components/Layout.js'
import { webdev, rec, prod, av } from '../db/projectsInfo.js'

const Item = props => (
  <article className="fl w-25 w-20-m w-10-l pa2">
    <a target={props.link && '_blank'} href={props.link}>
      <div className="aspect-ratio aspect-ratio--1x1 grow">
        <img
          style={{
            backgroundImage: `url(${props.imgUrl})`
          }}
          className="db bg-center cover aspect-ratio--object"
        />
        <h3 className="absolute bottom-0 link z-999 ma0 pa0 f6 black-80 bg-white">
          {props.name}
        </h3>
      </div>
    </a>
  </article>
)

const Section = ({ type, items }) => (
  <section className="cf w-100 pa2-ns mw8 center">
    <h1 className="f4 f3-ns pl2">{type}</h1>
    {items.map((item, i, arr) => (
      <Item key={i} imgUrl={item.imgUrl} name={item.name} link={item.link} />
    ))}
  </section>
)

const Index = props => (
  <Layout path={props.url.pathname}>
    <Section type="web development" items={webdev} />
    <Section type="music recording" items={rec} />
    <Section type="music production & sound-design" items={prod} />
    <Section type="AV performances" items={av} />
  </Layout>
)

export default Index
