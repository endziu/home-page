import Layout from '../components/Layout.js'

const Index = props => (
  <Layout>
    <div className="pl2 white mw8 center">
      <h2>hello, I'm Andrzej Koper</h2>
      <p className="ma0 fw6">I do: </p>
      <p className="ma0 lh-copy">
        <span className="pr2">
          sound and music for movies & tv
        </span>
        <a
          target="_blank"
          href="http://www.filmpolski.pl/fp/index.php?osoba=1146102"
          className="dim"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="#ffffff"
          >
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z " />
          </svg>
        </a>
      </p>
      <p className="ma0 lh-copy">
        <span>music production</span>
        <a
          target="_blank"
          href="https://soundcloud.com/abstract-machines"
          className="pl2 dim"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="#ffffff"
          >
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z " />
          </svg>
        </a>
      </p>
      <p className="ma0 lh-copy">
        <span>
          recording, mix and mastering for bands
        </span>
        <br />
        <span className="f6"> - most recently these beautiful people :</span>
        <a
          target="_blank"
          href="https://mombe.bandcamp.com/album/momb-2"
          className="pl2 pr2 dim link white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="#ffffff"
          >
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z " />
          </svg>
        </a>
      </p>
      <p className="ma0 lh-copy">
        <span>and web-dev ;)</span>
        <a target="_blank" href="https://github.com/endziu" className="pl2 dim">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="#ffffff"
          >
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z " />
          </svg>
        </a>
      </p>

    </div>
  </Layout>
)

export default Index
