var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var containsHelper = function(node, target) {
    if (node.value === target) { // check current node's value
      return true;
    }
    if (node.children.length === 0) { //Base case
      return false;
    }

    for (var i = 0; i < node.children.length; i++) {
      if (containsHelper(node.children[i], target)) {
        return true;
      }
    }
    return false;
  };
  return containsHelper(this, target, false);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
