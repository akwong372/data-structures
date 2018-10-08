var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.storageSize = 0;

  _.extend(newInstance, stackMethods);

  return newInstance;
};

var stackMethods = {};

stackMethods.push = function(value){

};

stackMethods.pop = function(value){

};

stackMethods.size = function(value){
  return this.storageSize;
};

