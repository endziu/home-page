const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'process.env.BACKEND_URL': prod
    ? 'https://178.62.249.30:16662'
    : 'https://localhost:16662'
}
