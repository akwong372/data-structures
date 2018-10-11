var LinkedList = function() {
  var list = {}; // {head: value, tail: value{value: 12, next{value: 99, next: {} }}
  list.head = null; // {value: 12, next{value: 99, next: {}}
  list.tail = null; // { value: 10, next: {}}


  list.addToTail = function(value){
  // if list is empty
    // list.head = new Node(value)

    // if(Object.keys(list).length === 0) {
    //   list.head = new Node(value);
    //   list.tail = list.head;
    // } else {
    //   // have the previous next point to the new node;
    //     // current tail points to the new thing
    //       // new thing becomes the next tail
    //   list.tail.next = new Node(value);
    //   list.tail = list.tail.next;
    // }
    list.tail = new Node(value);
  };

  list.removeHead = function() {
    //it should point to the next value after the first head is removed
    list.head = list.head.next;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value; // 1
  node.next = null; //list.tail.next

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
