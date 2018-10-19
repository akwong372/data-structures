var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.oldHeadValue = null;
  list.oldTailValue = null;


  list.addToTail = function(value) {
    if (list.head === null) {
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      var oldTail = list.tail;
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
      list.tail.prev = oldTail;
    }
  };

  list.removeHead = function() {
    list.oldHeadValue = list.head.value;
    list.head = list.head.next;
    return list.oldHeadValue;
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

  list.addToHead = function(value) {
    var oldList = list.head;
    var oldTail = list.tail;
    var oldHeadValue = list.oldHeadValue;
    var oldTailValue = list.oldTailValue;
    list.head = new Node(value);
    list.head.next = oldList;
    list.tail = oldTail;
    list.oldHeadValue = oldHeadValue;
    list.oldTailValue = oldTailValue;
  };

  list.removeTail = function() { //{value:5 next: null}
    if (list.tail.prev === null) {
      list.oldTailValue = list.tail.value;
      list.tail = null;
      return list.oldTailValue;
    }
    list.oldTailValue = list.tail.value; // 3
    list.tail = list.tail.prev; //list.tail = 5;
    list.tail.next = null;
    return list.oldTailValue;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 // addToTail = constant 0(1) - direct access
 // removeHead = constant 0(1) - direct access
 // contains = linear 0(n) - need to loop.
 */
