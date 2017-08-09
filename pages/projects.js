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
        music recording
      </pre>
      <a
        target="_blank"
        href="https://mombe.bandcamp.com/album/momb-2"
        className="link pl2 white underline-hover hover-yellow"
      >
        mombe
      </a>
      <a
        target="_blank"
        href="https://thejazzstatues.bandcamp.com/album/the-jazz-statues-conquer"
        className="link pl2 white underline-hover hover-yellow"
      >
        the jazz statues
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/watch?v=S_WFWuoMEEk"
        className="link pl2 white underline-hover hover-yellow"
      >
        sewa kaffo
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

    </div>
  </Layout>
)

export default Index
