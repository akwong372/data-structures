var Tree = function(value) { //
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  newTree.parent = null;

  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  newChild.parent = this;

  this.children.push(newChild);
};

treeMethods.removeFromParent = function() {
  var newTree = this;
  newTree.parent = null;
  return newTree;
};

treeMethods.contains = function(target) {
  var branch = this;
  if (branch.value === target) {
    return true;
  }

  if (branch.children.length > 0) {
    for (var i = 0; i < branch.children.length; i++) {
      if (branch.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

treeMethods.eachNode = function(callback) {
  var branch = this;

  if (branch.value) {
    callback(branch.value);
  }

  if (branch.children.length > 0) {
    for (var i = 0; i < branch.children.length; i++) {
      branch.children[i].eachNode(callback);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addChild = O(1) - constant
contains = O(n) - linear
 */