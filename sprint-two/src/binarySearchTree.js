var BinarySearchTree = function(value) {
  var tree = Object.create(treeMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var treeMethods = {
  insert: function(value) {
    var helper = function(node) {
      if (value < node.value) {
        // check left
        if (node.left === null) {
          node.left = BinarySearchTree(value);
        } else {
          // recurse left
          helper(node.left);
        }
      } else if (value > node.value) {
        // check right
        if (node.right === null) {
          node.right = BinarySearchTree(value);
        } else {
          // recurse right
          helper(node.right);
        }
      }      
    };
    helper(this);
  },
  contains: function(value) {

  },
  depthFirstLog: function() {

  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
