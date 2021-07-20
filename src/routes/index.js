const express = require('express');

const { nodeTree, treeSchema } = require('../schemas/treeSchemas');
const TreeServices = require('../services/TreeServices');
const validationHandler = require('../middlewares/validationHandler');

const routes = (app) => {
  const router = express.Router();
  app.use('/v1/b-trees', router);

  router.post('/height', validationHandler(treeSchema), (req, res, next) => {
    const { toTree } = req.body;
    try {
      const height = TreeServices.height(toTree);
      res.status(200).json({ height });
    } catch (err) {
      next(err);
    }
  });

  router.post('/neighbors', validationHandler(nodeTree), (req, res, next) => {
    const { toTree, node } = req.body;
    try {
      const neighbors = TreeServices.neighbors({ toTree, node });
      res.status(200).json({ neighbors });
    } catch (err) {
      next(err);
    }
  });

  router.post('/bfs', validationHandler(treeSchema), (req, res, next) => {
    const { toTree } = req.body;
    try {
      const bfs = TreeServices.bfs(toTree);
      res.status(200).json({ bfs });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = routes;
