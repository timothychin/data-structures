describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  // Pre-order Depth-First Tree Traversal
  it('should handle complex trees using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(10);
    binarySearchTree.insert(7);
    binarySearchTree.insert(11);
    binarySearchTree.insert(9);
    binarySearchTree.insert(13);
    binarySearchTree.insert(12);
    binarySearchTree.insert(15);
    binarySearchTree.insert(16);
    binarySearchTree.depthFirstLog(func);
    // Test for Pre-Order Depth
    expect(array).to.eql([5, 2, 3, 10, 7, 9, 11, 13, 12, 15, 16]);
    // Test for In-Order Depth
    // expect(array).to.eql([2, 3, 5, 7, 9, 10, 11, 12, 13, 15, 16]);
    // Test for Post-Order Depth
    // expect(array).to.eql([3, 2, 9, 7, 12, 16, 15, 13, 11, 10, 5]);
  });
});
