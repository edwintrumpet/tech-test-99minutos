const express = require('express');
const TreeServices = require('../services/TreeServices');

const routes = (app) => {
  const router = express.Router();
  app.use('/v1/b-trees', router);

  router.post('/height', (req, res, next) => {
    const { toTree } = req.body;
    try {
      const height = TreeServices.height(toTree);
      res.status(200).json({ height });
    } catch (err) {
      next(err);
    }
  });

  router.post('/neighbors', (req, res, next) => {
    const { toTree, node } = req.body;
    try {
      const neighbors = TreeServices.neighbors({ toTree, node });
      res.status(200).json({ neighbors });
    } catch (err) {
      next(err);
    }
  });

  router.post('/bfs', (req, res, next) => {
    try {
      res.status(200).json({ bfs: [-4, 1, -3] });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = routes;
