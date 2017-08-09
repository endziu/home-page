import Link from 'next/link'
import Router from 'next/router'

const Header = props => (
  <header className="pv1 pl2 mw8 center bb bw1 b--green">
    <nav className="f3-ns f4 flex items-center">
      <Link href="/">
        <a
          className={
            props.path === '/'
              ? 'blue no-underline mr3'
              : 'white hover-blue no-underline mr3'
          }
        >
          endziu.xyz
        </a>
      </Link>
      <Link href="/music?title=110untunednobassmix" as="/music">
        <a
          className={
            props.path === '/music'
              ? 'green no-underline mr3'
              : 'white hover-green no-underline mr3'
          }
        >
          music
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={
            props.path === '/projects'
              ? 'yellow no-underline mr3'
              : 'white hover-yellow no-underline mr3'
          }
        >
          projects
        </a>
      </Link>
    </nav>
  </header>
)

export default Header
