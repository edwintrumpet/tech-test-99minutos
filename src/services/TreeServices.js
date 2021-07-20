const heightCalculator = require('../utils/heightCalculator');
const Tree = require('../utils/Tree');

class TreeServices {
  static createTree(toTree) {
    const tree = new Tree();

    for (const value of toTree) {
      tree.addNode(value);
    }

    return tree;
  }

  static height(toTree) {
    const tree = this.createTree(toTree);
    return heightCalculator(tree.head);
  }

  static neighbors({ toTree, node }) {
    const tree = this.createTree(toTree);
    const { left, right } = tree.getNode(node);
    return {
      left,
      right,
    };
  }

  static bfs(toTree) {
    const tree = this.createTree(toTree);

    const toCheck = [tree.head];
    const result = [tree.head.value];

    while (toCheck.length) {
      const head = toCheck[0];
      if (head.left) {
        toCheck.push(head.left);
        result.push(head.left.value);
      }
      if (head.right) {
        toCheck.push(head.right);
        result.push(head.right.value);
      }
      toCheck.shift();
    }

    return result;
  }
}

module.exports = TreeServices;
