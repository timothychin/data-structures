var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackResult = {storage: {}, count: 0};
  _.extend(stackResult, stackMethods);
  return stackResult; 
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      var popped = this.storage[this.count - 1];
      delete this.storage[this.count];
      this.count--;
      return popped;
    }
  },
  size: function() {
    return this.count;
  }
};


