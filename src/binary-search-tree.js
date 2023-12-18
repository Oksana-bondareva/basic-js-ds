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

  remove(data) {
    this.rootNode = this.removeDate(this.rootNode, data)
  }

  removeDate(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeDate(node.left, data);
      return node
    } else if (node.data < data) {
      node.right = this.removeDate(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = this.removeDate(node.right, minRight.data);
      return node;
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};