var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.oldHeadValue = null;


  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      list.oldHeadValue = list.head.value;
      list.head = list.head.next;
      return list.oldHeadValue;
    }
    return null;
  };

  list.contains = function(target) {
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
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
 // addToTail = constant 0(1) - direct access
 // removeHead = constant 0(1) - direct access
 // contains = linear 0(n) - need to loop.
 */
