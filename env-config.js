const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod
    ? 'http://178.62.249.30:16662'
    : 'http://localhost:16662'
}
