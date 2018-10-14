var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me{value: 5, children:[]}
                          //{value: "1", children: [{value: 5, children: []}, {value:6, children:[]}]}

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
  // value should be passed in
  // 'this' will refer to the tree that we want to look at.
  this.children.push(Tree(value));

  // this.children.push({
  //   'value' : value,
  //   'children' : []
  // });

};

// var myTree = {value: undefined, children: [{value: 6 , children: [{value: 5, children: []}]}]}

treeMethods.contains = function(target) {
  var branch = this;
// var traverse = function(branch, target){
    if (branch.value === target) { // false
      return true;
    }

  if (branch.children.length > 0) {
    for (var i = 0; i < branch.children.length; i++) {
      if (branch.children[i].contains(target))
        return true;
    }
  }

return false;
};

