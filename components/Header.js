import Link from 'next/link';

export default () => (
  <header className="pa1 bg-black w-100 bb bw2 b--green">
    <nav className="f3-ns f4 flex items-center">
      <Link href="/">
        <a className={'white no-underline mr2 hover-blue'}>list</a>
      </Link>
      <Link href="/info">
        <a className={'white no-underline mr2 hover-yellow'}>info</a>
      </Link>
    </nav>
  </header>
);
