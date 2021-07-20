const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const supertest = require('supertest');

const {
  errorHandler,
  wrapErrors,
} = require('../middlewares/errorHandlers');

const testServer = (route) => {
  const app = express();
  app.use(express.json());
  route(app);
  app.use(wrapErrors);
  app.use(errorHandler);
  return supertest(app);
};

module.exports = testServer;
