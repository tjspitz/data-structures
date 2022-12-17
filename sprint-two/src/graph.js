// Instantiate a new graph
var Graph = function() {
  this.nodeContainer = {};
  // {
  //    node: [all my edges],
  //    node: [all my edges],
  //    node: [no edges yet]
  // }
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // this.nodeContainer[node] = this.nodeContainer[node] || [];
  this.nodeContainer[node] = [];
};


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // if this.nodeContainer @ node exists
  // if (this.nodeContainer[node]) {
  //   return true;
  // } else {
  //   return false;
  // }
  return this.nodeContainer[node] ? true : false;
};


// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  /*
  while 'node's edges array has length, we could continuously
    store node array's last val in order to then call removeEdge,
      which of course removes edges from both the
        'from' and the 'to' nodes,
          and then we delete the node after the loop kills
  so essentially, what we have below can become workable,
    but invoking 'includes' on every single node is unnecessary
      the 'while' above will visit every 'other node'
        that might have 'node' as one of its edges
  */

  if (this.nodeContainer[node]) {
    // declare var
    // iterate through this.nodeContainer[node]
      // invoke removeEdge method on current element

    for (var key in this.nodeContainer) {
      if (this.nodeContainer[key].includes(node)) {

      }
    }

    var nodeEdges = this.nodeContainer[node];

    // for (var i = 0; i < nodeEdges.length; i ++) {
    //   this.removeEdge(nodeEdges[i]);
    // }

    delete nodeEdges;
  }
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodeContainer[toNode].includes(fromNode);
};


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeContainer[toNode].push(fromNode);
  this.nodeContainer[fromNode].push(toNode);
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

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
