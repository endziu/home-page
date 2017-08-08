import Link from 'next/link'
import Router from 'next/router'

export default props => (
  <header className="pv1 pl2 mw8 center bb bw1 b--green">
    <nav className="f3-ns f4 flex items-center">
      <Link href="/">
        <a className={'white hover-blue no-underline mr3'}>
          abstract machines
        </a>
      </Link>
      <Link href="/music?title=110untunednobassmix" as="/music">
        <a className={'white hover-green no-underline mr3'}>
          music
        </a>
      </Link>
      <Link href="/projects">
        <a className={'white hover-yellow no-underline mr3'}>
          projects
        </a>
      </Link>
    </nav>
  </header>
)
