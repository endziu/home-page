import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

export default ({
  path,
  children,
  title = 'd92e6a9fbbbb08524c50292a6918aa6de713fb30c4663dd615e3862227d5bc48'
}) => (
  <div className="sans-serif black-80 ph2 ph3-m ph4-l">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/tachyons@4.7.0/css/tachyons.min.css"
      />
    </Head>
    <Header path={path} />

    {children}

    <Footer />
    <style jsx global>{`
      html {
        background: #f1f1f1;
        background: url(/imgs/background.webp) no-repeat center center fixed;
        background-size: cover;
      }
    `}</style>
  </div>
)

//#001b44
