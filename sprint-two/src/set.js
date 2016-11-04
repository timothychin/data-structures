var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var result;
  var index = _.indexOf(this._storage, item);
  if (index > -1) {
    result = this._storage[index];
    this._storage.splice(index, 1);
  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
