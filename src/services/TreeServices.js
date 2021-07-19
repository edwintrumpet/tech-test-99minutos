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

    console.log(tree);

    return 5;
  }
}

module.exports = TreeServices;
