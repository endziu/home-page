const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod
    ? 'http://178.62.249.30:3000/'
    : 'http://localhost:3000'
};
