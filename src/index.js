const express = require('express');
const debug = require('debug')('app:server');

const { port } = require('./config');
const routes = require('./routes');

const app = express();

app.use(express.json());

routes(app);

app.listen(port, (err) => {
  if (err) debug(err);
  else debug(`Listening on http://localhost:${port}`);
});