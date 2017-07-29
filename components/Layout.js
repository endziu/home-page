import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

export default ({
  children,
  title = 'd92e6a9fbbbb08524c50292a6918aa6de713fb30c4663dd615e3862227d5bc48'
}) => (
  <div className="sans-serif bg-navy vh-100 overflow-hidden">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"
      />
    </Head>

    <Header />

    {children}

    <Footer />

  </div>
);
