var BinarySearchTree = function(value) {
  var newBinaryTree = {};
  newBinaryTree.value = value;
  newBinaryTree.left = null;
  newBinaryTree.right = null;

  extend(newBinaryTree, searchMethods);

  return newBinaryTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var searchMethods = {};

searchMethods.insert = function(value) {
  // var node = {};
  // node.value = value;
  // node.left = null;
  // node.right = null;
  debugger;

  //root
  if (value < this.value && this.left === null) {
    this.left = BinarySearchTree(value);
  } else {
    this.right = BinarySearchTree(value);
  }

};

searchMethods.contains = function(value) {

};

searchMethods.depthFirstLog = function(value) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */