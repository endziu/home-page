import Link from 'next/link'
import Router from 'next/router'

const Header = props => (
  <header className="pv1 pl2 pa3-l mw8 center bb bw1 b--green">
    <nav className="f3-ns f4 flex items-center">
      <Link href="/">
        <a
          className={
            props.path === '/'
              ? 'blue no-underline mr3'
              : 'black-80 hover-blue no-underline mr3'
          }
        >
          endziu.xyz
        </a>
      </Link>
      <Link href="/music?title=110untunednobassmix" as="/music">
        <a
          className={
            props.path === '/music'
              ? 'yellow no-underline mr3'
              : 'black-80 hover-yellow no-underline mr3'
          }
        >
          music
        </a>
      </Link>
      <Link href="/projects">
        <a
          className={
            props.path === '/projects'
              ? 'red no-underline mr3'
              : 'black-80 hover-red no-underline mr3'
          }
        >
          projects
        </a>
      </Link>
    </nav>
  </header>
)

export default Header
