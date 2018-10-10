class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageSize = 0;
    this.lastItem;
  }

  enqueue(value) {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }

  dequeue() {
    if (this.storageSize > 0){
      this.storageSize--;
      this.lastItem = this.storage[0];
      delete this.storage[0];
    }
    for (var key in this.storage){
      this.storage[key - 1] = this.storage[key];
    }
    return this.lastItem;
  }

  size() {
    return this.storageSize;
  }

}

var newQueue = new Queue();