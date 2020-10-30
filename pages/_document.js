import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/tachyons.min.css" />
          
          {this.props.styleTags}
        </Head>
        <body className="sans-serif black-80 pa2 mw8 center ph3-m ph4-l vh-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
