require('dotenv').config();

const config = {
  isDev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  basePath: '/v1/b-trees',
};

module.exports = config;
