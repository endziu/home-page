import Layout from '../components/Layout.js'

const webdev = [
  {
    imgUrl: 'http://mrmrs.github.io/images/0006.jpg',
    name: 'dźwiekowa mapa',
    link: 'https://dzwiekowamapa.pl'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0002.jpg',
    name: 'canvas physics',
    link: 'https://endziu.xyz'
  }
]

const rec = [
  {
    imgUrl: 'http://mrmrs.github.io/images/0005.jpg',
    name: 'mombe',
    link: 'https://mombe.bandcamp.com/album/momb-2'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0001.jpg',
    name: 'the jazz statues',
    link: 'https://thejazzstatues.bandcamp.com/album/the-jazz-statues-conquer'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0004.jpg',
    name: 'sewa kafo',
    link: 'https://www.youtube.com/watch?v=S_WFWuoMEEk'
  }
]

const av = [
  {
    imgUrl: 'http://mrmrs.github.io/images/0006.jpg',
    name: 'live @ceta',
    link: 'https://vimeo.com/123825272'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0005.jpg',
    name: 'live @Puzzle',
    link: 'https://www.youtube.com/watch?v=ZpCya0Pj47E'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0007.jpg',
    name: 'live @Login',
    link: ''
  }
]

const prod = [
  {
    imgUrl: 'http://mrmrs.github.io/images/0005.jpg',
    name: 'rzeźnia numer 1',
    link: 'http://www.filmpolski.pl/fp/index.php?film=1217848'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0001.jpg',
    name: 'krótka histeria czasu',
    link: 'http://www.filmpolski.pl/fp/index.php?film=1216732'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0004.jpg',
    name: 'krew z nosa',
    link: 'http://www.filmpolski.pl/fp/index.php?film=1214406'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0005.jpg',
    name: 'pokój',
    link: 'http://www.filmpolski.pl/fp/index.php?film=4224943'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0001.jpg',
    name: 'micro situations',
    link: 'https://vimeo.com/85443642'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0004.jpg',
    name: 'ucieczka ze szklanej kuli',
    link: 'https://www.youtube.com/watch?v=DgTGhln-rlM'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0004.jpg',
    name: 'ty i rys społeczny',
    link: 'https://vimeo.com/11533775'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0004.jpg',
    name: 'ArC2',
    link: 'https://vimeo.com/185946610'
  },
  {
    imgUrl: 'http://mrmrs.github.io/images/0004.jpg',
    name: 'gra w ciemno',
    link: 'https://www.atmgrupa.pl/produkcja/gra-w-ciemno/'
  }
]

const Item = props => (
  <article className="fl w-25 w-20-m w-10-l pa2">
    <a target="_blank" href={props.link}>
      <div className="aspect-ratio aspect-ratio--1x1 grow">
        <img
          style={{
            backgroundImage: `url(${props.imgUrl})`
          }}
          className="db bg-center cover aspect-ratio--object"
        />
        <h3 className="absolute bottom-0 link z-999 ma0 pa0 f6 black-80 bg-white-60">
          {props.name}
        </h3>
      </div>
    </a>
  </article>
)

const Section = ({ type, items }) => (
  <section className="cf w-100 pa2-ns mw8 center">
    <h1>{type}</h1>
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
