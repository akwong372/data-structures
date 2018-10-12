var LinkedList = function() {
  var list = {}; // {head: value, tail: value{value: 12, next{value: 99, next: null }}
  list.head = null; // {value: 12, next{value: 99, next: {}}
  list.tail = null; // { value: 10, next: {}}
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
    //it should point to the next value after the first head is removed
    list.oldHeadValue = list.head.value;
    list.head = list.head.next;
    return list.oldHeadValue;
  };

  list.contains = function(target) { // 5
    var targetSearch = function (node, targetValue) { // list.head.next.next(5), 6
      debugger;
      if (node.value === targetValue) { // 4, 6, false | 5, 6 , false |
        console.log('line 30 evaluated to true');
        return true;
      }
      // else if (node.value !== targetValue)

      if (node.next === null){
        console.log('line 30 evaluated to false');
        return false;
      } else {
        console.log('re run function');
        targetSearch(node.next, targetValue); // false
      }
    };
    targetSearch(list.head, target);
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
