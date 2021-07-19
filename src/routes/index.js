const express = require('express');

const routes = (app) => {
  const router = express.Router();
  app.use('/v1/b-trees', router);

  router.post('/height', (req, res) => {
    res.status(200).json({ height: 3 });
  });

  router.post('/neighbors', (req, res) => {
    res.status(200).json({
      neighbors: {
        left: null,
        right: 4,
      },
    });
  });

  router.post('/bfs', (req, res) => {
    res.status(200).json({ bfs: [-4, 1, -3] });
  });
};

module.exports = routes;
