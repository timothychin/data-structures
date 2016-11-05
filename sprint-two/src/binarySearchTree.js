var BinarySearchTree = function(value) {
  var bTree = Object.create(bTreeMethods);
  bTree.value = value;
  bTree.left = null;
  bTree.right = null;
  return bTree;
};

var bTreeMethods = {
  insert: function(value) {
    var recurseInsert = function(node) {
      if (value < node.value) {
        // check left
        if (node.left === null) {
          node.left = BinarySearchTree(value);
        } else {
          // recurse left
          recurseInsert(node.left);
        }
      } else if (value > node.value) {
        // check right
        if (node.right === null) {
          node.right = BinarySearchTree(value);
        } else {
          // recurse right
          recurseInsert(node.right);
        }
      }      
    };
    recurseInsert(this);
  },
  contains: function(value) {
    var found = false;
    var search = function(node) {
      if (value === node.value) {
        found = true;
      } else if (node.left !== null && value < node.value) {
        search(node.left);
      } else if (node.right !== null && value > node.value) {
        search(node.right);
      }
    };
    search(this);
    return found;
  },

  depthFirstLog: function(cb) {
    // Pre-order Depth-First Tree Traversal
    var preDepth = function(node) {
      if (node !== null) {
        cb(node.value);
        preDepth(node.left);
        preDepth(node.right);
      }
    };
    preDepth(this);

    // In-order Depth-First Tree Traversal
    // var inOrderDepth = function(node) {
    //   if (node !== null) {
    //     inOrderDepth(node.left);
    //     cb(node.value);
    //     inOrderDepth(node.right);
    //   }
    // };
    // inOrderDepth(this);'

    // Post-Order Depth-First Tree Traversal
    // var postDepth = function(node) {
    //   if (node !== null) {
    //     postDepth(node.left);
    //     postDepth(node.right);
    //     cb(node.value);
    //   }
    // };
    // postDepth(this);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?

  .insert = O(log(n))
  .contains = O(log(n))
  .depthFirstLog = O(n)

 */
