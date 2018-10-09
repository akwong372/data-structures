var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.storageSize = 0;
  this.lastItem;
};

Stack.prototype.push = function() {
  this.storageSize++;
};

Stack.prototype.pop = function() {
  if (this.storageSize > 0){
    this.storageSize--;
  }
};

Stack.prototype.size = function() {
  return this.storageSize;
};

var newInstance = new Stack();