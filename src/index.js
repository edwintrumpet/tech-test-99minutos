const express = require('express');
const debug = require('debug')('app:server');

const {
  errorHandler,
  logErrors,
  wrapErrors,
} = require('./middlewares/errorHandlers');
const { port } = require('./config');
const routes = require('./routes');

const app = express();

// Adapt request
app.use(express.json());

// Routes
routes(app);

// Handle errors
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Server
app.listen(port, (err) => {
  if (err) debug(err);
  else debug(`Listening on http://localhost:${port}`);
});
