var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newInstance = Object.create(stackMethods);
newInstance.storage = {};
newInstance.storageSize = 0;
newInstance.lastItem;

return newInstance;
};

stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.storageSize] = value;
  this.lastItem = value;
  this.storageSize++;
}

stackMethods.pop = function() {
  if (this.storageSize > 0){
    this.storageSize--;
    this.lastItem = this.storage[this.storageSize]
    delete this.storage[this.storageSize];
  }
  return this.lastItem;
}

stackMethods.size = function() {
  return this.storageSize;
}
