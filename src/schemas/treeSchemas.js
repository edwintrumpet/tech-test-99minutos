const Joi = require('joi');

const node = Joi.number();
const toTree = Joi.array().items(node);

const treeSchema = {
  toTree: toTree.required(),
};

const nodeTree = {
  toTree: toTree.required(),
  node: node.required(),
};

module.exports = { treeSchema, nodeTree };
