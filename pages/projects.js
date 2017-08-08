import Layout from '../components/Layout.js'

const Index = props => (
  <Layout path={props.url.pathname}>
    <div className="pl2 white mw8 center flex flex-column">
      <pre>
        web development
      </pre>
      <a
        target="_blank"
        href="https://dzwiekowamapa.pl"
        className="link pl2 white underline-hover hover-yellow"
      >
        dzwiekowaMapa.pl
      </a>
      <a
        target="_blank"
        href="https://endziu.xyz"
        className="link pl2 white underline-hover hover-yellow"
      >
        old home page
      </a>

      <pre>
        AV performances
      </pre>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=NkvSuzg4KF8"
        className="link pl2 white underline-hover hover-yellow"
      >
        live @ceta
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=ZpCya0Pj47E"
        className="link pl2 white underline-hover hover-yellow"
      >
        live @Puzzle
      </a>

      <pre>
        film & tv
      </pre>
      <a
        target="_blank"
        href="http://www.filmpolski.pl/fp/index.php?osoba=1146102"
        className="link pl2 white underline-hover hover-yellow"
      >
        film polski
      </a>
      <a
        target="_blank"
        href="https://www.atmgrupa.pl/produkcja/gra-w-ciemno/"
        className="link pl2 white underline-hover hover-yellow"
      >
        gra w ciemno
      </a>
    </div>
  </Layout>
)

export default Index
