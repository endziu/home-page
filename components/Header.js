import Link from 'next/link'

export default () => (
  <header className="pv1 pl2 bg-black mw8 center bb bw1 b--green">
    <nav className="f3-ns f4 flex items-center">
      <Link href="/">
        <a className={'white f3 no-underline mr3 hover-blue'}>
          abstract machines
        </a>
      </Link>
      <Link href="/music?title=110untunednobassmix" as="/music">
        <a className={'white f4 no-underline mr3 hover-green'}>music</a>
      </Link>
      <Link href="/web">
        <a className={'white f4 no-underline mr3 hover-yellow'}>web</a>
      </Link>
    </nav>
  </header>
)
