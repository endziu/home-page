import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Description" content="Andrzej Koper's home-page." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
