const Node = require('./Node');

class Tree {
  constructor() {
    this.head = new Node(null);
  }

  addNode(nodeValue) {
    let pointer = this.head;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (!pointer.value) {
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
}

module.exports = Tree;
