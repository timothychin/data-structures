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
    var recurseDepth = function(node) {
      if (node !== null) {
        cb(node.value);
        recurseDepth(node.left);
        recurseDepth(node.right);
      }
    };
    recurseDepth(this);
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
