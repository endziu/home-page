const isProd = process.env.NODE_ENV === "production"

module.exports = {
    serverRuntimeConfig: { // Will only be available on the server side
      backEndUrl: isProd ? 'https://endziu.xyz' : 'http://localhost:16662'
    },
    publicRuntimeConfig: { // Will be available on both server and client
      backEndUrl: isProd ? 'https://endziu.xyz' : 'http://localhost:16662'
    }
  }