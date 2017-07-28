const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.BACKEND_URL': prod
    ? 'http://37.233.102.24:3000'
    : 'http://localhost:3000'
};
