

// Instantiate a new graph
var Graph = function() {
  // note we can only store primitive values as node/vertice values
  // graph = { node : [edges], node: [edges], etc. }
  this.vertices = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices[node] = {value: node, edges: []};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.vertices[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.vertices[node] !== undefined) {
    delete this.vertices[node];
  }
  // removing the node from all other node's edge list : ADD TEST FOR THIS
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.vertices[fromNode] === undefined || this.vertices[toNode] === undefined) {
    return false;
  }
  var fromHasTo = _.contains(this.vertices[fromNode].edges, toNode);
  var toHasFrom = _.contains(this.vertices[toNode].edges, fromNode);
  return fromHasTo && toHasFrom;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode) === false) {
    this.vertices[fromNode].edges.push(toNode);
    this.vertices[toNode].edges.push(fromNode); 
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode) === true) {
    var fromHasTo = _.indexOf(this.vertices[fromNode].edges, toNode);
    var toHasFrom = _.indexOf(this.vertices[toNode].edges, fromNode);
    this.vertices[fromNode].edges.splice(fromHasTo, 1);
    this.vertices[toNode].edges.splice(toHasFrom, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // TEST FOR ALL PRIMITIVE VALUES OF NODE
  for (var node in this.vertices) {
    cb(this.vertices[node].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


