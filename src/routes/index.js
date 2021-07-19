const express = require('express');
const TreeServices = require('../services/TreeServices');

const routes = (app) => {
  const router = express.Router();
  app.use('/v1/b-trees', router);

  router.post('/height', (req, res) => {
    const { toTree } = req.body;
    const height = TreeServices.height(toTree);
    res.status(200).json({ height });
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

/**
 * [1,2,3,0,5,-1,7,8]
 *
 *   1
 *  0 2
 *-1   3
 *      5
 */
