

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(index);
  var createNode = function(key, value) {
    var node = LimitedArray(3);
    node.set(0, key);
    node.set(1, value);
    node.set(2, null);
    return node;
  };
  var node = this._storage.get(index);
  var newNode;
  // Non-collison case (empty index)
  if (node === undefined) {
    newNode = createNode(k, v);
    this._storage.set(index, newNode); 
  } else { // Collision case 
    // move through the linked list
    while (node !== null) {
      if (node.get(0) === k) {
        node.set(1, v);
        break;
      }
      if (node.get(2) === null) {
        // add the newNode to the end of the linked list
        newNode = createNode(k, v);
        node.set(2, newNode);
      }
      //  advance node pointer
      node = node.get(2);
    }
  }
};

// Helper, from the startingNode, look for a k
// if found, return that node
// if not found, return undefined
HashTable.prototype._search = function(startingNode, k) {
  var found = false;
  var result;
  while (startingNode !== null && !found) {  
  // if the node's key matches with the removal key
    if (startingNode.get(0) === k) {
      found = true;
      result = startingNode;
    }
    // advance the node pointer
    startingNode = startingNode.get(2);
  }
  return result;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // doesn't account for collision cases
  var firstBucket = this._storage.get(index);
  if (firstBucket === undefined) {
    return firstBucket;
  }
  var bucketHas = this._search(firstBucket, k); 
  return bucketHas === undefined ? undefined : bucketHas.get(1);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var foundNode;
  var currentBucket = this._storage.get(index);
  if (currentBucket !== undefined) {
    // from the first node, check its key
    var foundRemove = false;  
    foundNode = this._search(currentBucket, k);
    if (foundNode !== undefined) {
      foundRemove = true;
    }

    currentBucket = this._storage.get(index);
    while (foundRemove) {
      // no collision for k, single element needs to be removed
      if (currentBucket === foundNode) { 
        this._storage.set(index, undefined); 
        break;
      }
      // collisions for k
      if (currentBucket.get(2) === foundNode) {
        currentBucket.set(2, foundNode.get(2));
      }
      // advance the pointer
      currentBucket = currentBucket.get(2);
    }
  }
  return foundNode;
  
};



/*
 * Complexity: What is the time complexity of the above functions?

.insert = O(1) amortized
.retrieve = O(1) amortized
.remove = O(1) amortized 

 */


