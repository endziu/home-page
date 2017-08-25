import Layout from '../components/Layout.js'

const Section = ({ imgUrl, type }) => (
  <section className="cf w-100 pa2-ns mw8 center">
    <h1>{type}</h1>
    <article className="fl w-25 w-20-m w-10-l pa2">
      <div className="aspect-ratio aspect-ratio--1x1">
        <img
          style={{
            backgroundImage: `url(${imgUrl})`
          }}
          className="db bg-center cover aspect-ratio--object"
        />
        <a href="#0" className="absolute link z-999">
          <h3 className="f6 black-80 bg-white-60">Title of piece</h3>
        </a>
      </div>
    </article>
  </section>
)

const Index = props => (
  <Layout path={props.url.pathname}>
    <Section
      type="web development"
      imgUrl="http://mrmrs.github.io/images/0006.jpg"
    />
    <Section
      type="music production"
      imgUrl="http://mrmrs.github.io/images/0006.jpg"
    />
  </Layout>
)

export default Index
