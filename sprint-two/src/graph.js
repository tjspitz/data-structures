

// Instantiate a new graph
var Graph = function() {
  this._storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // debugger;
  this._storage[node] = this._storage[node] || { };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.hasOwn(this._storage, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // remove the node, but remove those 'edges' from all other nodes
  for (const vertex in this._storage) {
    if (this._storage[vertex][node]) {
      delete this._storage[vertex][node];
    }
  }
  delete this._storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return !!this._storage[fromNode][toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if fromNode doesn't have toNode as a prop, add it
  // and vice-versa
  if (!this.hasEdge(fromNode, toNode)) {
    this._storage[fromNode][toNode] = true;
    this._storage[toNode][fromNode] = true;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    delete this._storage[fromNode][toNode];
    delete this._storage[toNode][fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (const vertex in this._storage) {
    cb(vertex);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


