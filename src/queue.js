const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.headNode = null;
    this.lengthNode = 0;
  }

  getUnderlyingList() {
    return this.headNode;
  }

  enqueue(value) {
    if (this.lengthNode === 0) {
      this.headNode = new ListNode(value);
    } else {
      let curElement = this.headNode;
      while(curElement.next) {
        curElement = curElement.next;
      }
      curElement.next = new ListNode(value);
    }
    this.lengthNode++;
  }

  dequeue() {
    let headNodeVal = this.headNode.value;
    this.headNode = this.headNode.next;
    return headNodeVal;
  }
}

module.exports = {
  Queue
};
