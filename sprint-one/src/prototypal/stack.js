var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var sResult = Object.create(stackMethods);
  sResult.storage = {};
  sResult.count = 0;
  return sResult;
};
var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    var pop;
    if (this.count > 0) {
      this.count--;
      pop = this.storage[this.count];
    }
    return pop;
  },
  size: function() {
    return this.count;
  }
};