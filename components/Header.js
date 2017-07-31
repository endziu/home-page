import Link from 'next/link';

export default () => (
  <header className="pv1 pl2 bg-navy mw8 center bb bw1 b--green">
    <nav className="f3-ns f4 flex items-center">
      <Link href="/">
        <a className={'white f3 no-underline mr3 hover-green'}>music</a>
      </Link>
      <Link href="/info">
        <a className={'white f3 no-underline mr3 hover-yellow'}>info</a>
      </Link>
    </nav>
  </header>
);
