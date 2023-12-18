const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;
  root() {
    return this.rootNode;
  }
 
  add(data) {
    this.rootNode = this.addDate(this.rootNode, data);
  }

  addDate(node, data) {
    if (!node) {
      return new Node(data);
    }
    if (node.data === data) {
      return node;
    }
    if (data < node.data) {
      node.left = this.addDate(node.left, data);
    } else {
      node.right = this.addDate(node.right, data);
    }
    return node;
  }

  has(data) {
    return this.searchDate(this.rootNode, data) !== null;
  }

  find(data) {
    return this.searchDate(this.rootNode, data);
  }

  searchDate(node, data) {
    if (!node) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    return data < node.data ? 
      this.searchDate(node.left, data) :
      this.searchDate(node.right, data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};