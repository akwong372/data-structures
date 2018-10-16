

// Instantiate a new graph
var Graph = function() {
  //insatiate Graph
  this.nodes = {}; //
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  return this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Boolean(this.nodes[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return Boolean(this.nodes[fromNode][toNode]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { //3, 2
  this.nodes[fromNode][toNode] = true; // 3
  this.nodes[toNode][fromNode] = true;
  console.log(this.nodes);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


