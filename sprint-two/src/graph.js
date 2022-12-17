// Instantiate a new graph
var Graph = function() {
  this.nodeContainer = {};
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.nodeContainer[node] = this.nodeContainer[node] || [];
  this.nodeContainer[node] = [];
};


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeContainer[node] ? true : false;
};


// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  while (this.nodeContainer[node].length) {
    var currentEdges = this.nodeContainer[node];
    var lastVal = currentEdges.pop();
    this.removeEdge(node, lastVal);
  }
  delete this.nodeContainer[node];
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodeContainer[fromNode] === undefined) {
    return false;
  } else {
    return this.nodeContainer[fromNode].includes(toNode);
  }
};


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode !== undefined && toNode !== undefined) {
    this.nodeContainer[toNode].push(fromNode);
    this.nodeContainer[fromNode].push(toNode);
  }
};


// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  /*
  Food for thought: since we are storing edges in arrays, we could reassign each nodeContainer[aNode] to a filtered version of itself!
  */
  var toIdx = this.nodeContainer[fromNode].indexOf(toNode);
  var fromIdx = this.nodeContainer[toNode].indexOf(fromNode);
  this.nodeContainer[fromNode].splice(toIdx, 1);
  this.nodeContainer[toNode].splice(fromIdx, 1);
};


// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodeContainer, function(item, i) {
    cb(i);
  });

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
