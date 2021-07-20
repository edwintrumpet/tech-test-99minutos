const express = require('express');
const treeRoutes = require('./treeRoutes');

const routes = (app) => {
  const router = express.Router();
  app.use('/', router);
  treeRoutes(app);

  router.get('/', (req, res) => {
    res.status(200).json({ message: '99 minutos app test works!' });
  });
};

module.exports = routes;
