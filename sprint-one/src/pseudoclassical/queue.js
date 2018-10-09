var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageSize = 0;
  this.lastItem;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

Queue.prototype.dequeue = function() {
  if (this.storageSize > 0){
    this.storageSize--;
    this.lastItem = this.storage[this.storageSize]
    delete this.storage[this.storageSize];
  }
  return this.lastItem;
};

Queue.prototype.size = function() {
  return this.storageSize;
};

var newInstance = new Queue();