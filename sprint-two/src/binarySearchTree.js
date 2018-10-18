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
  var node = this;

  var searchRecurse = function(child) {
    if (value < child.value) {
      if (child.left === null) {
        child.left = BinarySearchTree(value);
      } else {
        return searchRecurse(child.left);
      }
    } else if (value > child.value) {
      if (child.right === null) {
        child.right = BinarySearchTree(value);
      } else {
        return searchRecurse(child.right);
      }
    }
  };
  searchRecurse(node);
};

searchMethods.contains = function(value) {
  var node = this;

  var searchRecurse = function(child) {

    if (value === child.value) {
      return true;
    }

    if (value < child.value) {
      if (child.left !== null) {
        return searchRecurse(child.left);
      } else {
        return false;
      }
    } else if (value > child.value) {
      if (child.right !== null) {
        return searchRecurse(child.right);
      } else {
        return false;
      }
    }
  };
  return searchRecurse(node);
};

searchMethods.depthFirstLog = function(callback) {
  var node = this;

  var searchRecurse = function(child) {
    callback(child.value);

    if (child.left !== null) {
      searchRecurse(child.left);
    }

    if (child.right !== null) {
      searchRecurse(child.right);
    }
  };
  return searchRecurse(node);
};

/*
 * Complexity: What is the time complexity of the above functions?
 // Time complexity is Θ(log(n)) due to the functions eliminating half of the tree every time they do work. Worst case
 // scenario, it would be Linear. - Alvin and TJ
 */