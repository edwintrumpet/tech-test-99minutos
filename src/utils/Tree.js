/* eslint-disable no-constant-condition */
const Boom = require('@hapi/boom');

const Node = require('./Node');

class Tree {
  constructor() {
    this.head = new Node(null);
  }

  addNode(nodeValue) {
    let pointer = this.head;

    while (true) {
      if (pointer.value === null) {
        pointer.value = nodeValue;
        break;
      }

      let branch = 'right';
      if (nodeValue < pointer.value) {
        branch = 'left';
      }

      if (!pointer[branch]) {
        pointer[branch] = new Node(nodeValue);
        break;
      }
      pointer = pointer[branch];
    }
  }

  getNode(nodeValue) {
    let node = this.head;

    while (true) {
      if (node?.value === null) {
        throw Boom.notFound('Node is not found in tree');
      }
      if (node.value === nodeValue) {
        return {
          value: node.value,
          left: node.left === null ? null : node.left.value,
          right: node.right === null ? null : node.right.value,
        };
      }
      if (nodeValue < node.value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
  }
}

module.exports = Tree;
