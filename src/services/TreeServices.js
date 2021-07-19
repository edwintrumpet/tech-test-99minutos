const Tree = require('../utils/Tree');
const heightCalculator = require('../utils/heightCalculator');

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
}

module.exports = TreeServices;
