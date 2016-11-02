var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var qResults = {storage: {}, count: 0, front: 0, back: 0};
  _.extend(qResults, queueMethods);
  return qResults;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.back++;
    this.count++;
  },
  dequeue: function() {
    var dq;
    if (this.count > 0) {
      dq = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      this.count--;
    }
    return dq;
  },
  size: function() {
    return this.count;
  }
};


