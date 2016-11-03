var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = new Node(value);
    if (list.tail !== null) { 
      // non-empty list, link nextail to the list
      list.tail.next = newTail;
    }
    // move tail to the newNode
    list.tail = newTail;
    if (list.head === null) { 
      // empty list, 
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    var oldHead, oldHeadValue;
    if (list.head !== null) {
      oldHead = list.head;
      // single element linkedList
      if (list.head === list.tail) {
        list.tail = null;
      }  
      list.head = oldHead.next;
      oldHeadValue = oldHead.value;
    }
    return oldHeadValue;
  };

  list.contains = function(target) {
    var containsHelper = function(node, found) {
      if (node.value === target) {
        // base case : target found
        return true;
      } else if (node.next === null) { // base case : end of list, not found
        return false;
      } else { // recurse
        return containsHelper(node.next, false);
      }
    };

    return containsHelper(list.head, false);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
