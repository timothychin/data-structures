var Queue = function() {
  var someInstance = {};
  
  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var back = 0;
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
    count++;

  };

  someInstance.dequeue = function() {
    var result;
    if (Object.keys(storage).length > 0) {
      result = storage[front];
      delete storage[front];
      front++;
      count--;
    }
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
