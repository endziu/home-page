import Link from 'next/link';

export default () => (
  <header className="pa1 bg-navy w-100 mb1 bb bw2 b--green">
    <nav className="f3-ns f4 flex items-center">
      <Link href="/">
        <a className={'white f2 no-underline mr3 hover-blue'}>list</a>
      </Link>
      <Link href="/info">
        <a className={'white f2 no-underline mr3 hover-yellow'}>info</a>
      </Link>
    </nav>
  </header>
);
