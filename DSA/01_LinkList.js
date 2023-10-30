//! Linked List
/*
A linked list is a linear data structure similar to an array. 
However, unlike arrays, elements are not stored in a particular memory location or index.
Rather each element is a separate object that contains a pointer or a link to the next object in that list.

In JavaScript, a linked list looks like this:
const list = {
    head: {
        value: 1
        next: {
            value: 2                                             
            next: {
                value: 3
                next: null
                }
            }
        }
    }
};

An advantage of Linked Lists :->
(1) Nodes can easily be removed or added from a linked list without reorganizing the entire data structure. 
This is one advantage it has over arrays.

Disadvantages of Linked Lists :->
(1) Search operations are slow in linked lists. 
Unlike arrays, random access of data elements is not allowed. 
Nodes are accessed sequentially starting from the first node.
(2) It uses more memory than arrays because of the storage of the pointers.

There are three types of linked lists :->
- Single Linked List
- Double Linked List
- Circular Linked List
*/

//! Class for making Node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//! Class for Making Linked List
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  appendNode(newNode) {
    let node = this.head;
    if (node == null) {
      // Means it's just empty list
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }
}

//! Now make a Linked List :- first we create two nodes and pointer from 1 to 2 node
let node1 = new Node(1);
let node2 = new Node(2);
node1.next = node2; // in next of first node we give secodn node address

let list = new LinkedList(node1);

console.log(list);
