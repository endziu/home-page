import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout =  ({ path, children, title = "endziu.xyz" }) => (
  <div className="sans-serif black-80 ph2 ph3-m ph4-l">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="tachyons.min.css" />
    </Head>
    <Header path={path} />

    {children}

    <Footer />
    <style jsx global>{`
      html {
        background: #f1f1f1;
      }
    `}</style>
  </div>
)

export default Layout
