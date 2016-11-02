var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var qResults = Object.create(queueMethods);
  qResults.storage = {};
  qResults.count = 0;
  qResults.front = 0;
  qResults.back = 0;
  return qResults;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
    this.count++;
  },
  dequeue: function() {
    var result;
    if (this.count > 0) {
      result = this.storage[this.front];
      this.front++;
      this.count--;
    }
    return result;
  },
  size: function() {
    return this.count;
  } 
};


