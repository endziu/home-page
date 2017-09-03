const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod
    ? 'https://endziu.xyz'
    : 'http://localhost:16662'
}
