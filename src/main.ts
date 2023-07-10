import { CircularLinkedList } from "./algorithms/linkedList/CircularLinkedList";
import { Deck } from "./algorithms/Deck";
import { DoublyLinkedList } from "./algorithms/linkedList/DoublyLinkedList";
import { LinkedList } from "./algorithms/linkedList/LinkedList";
import { Queue } from "./algorithms/Queue";
import { Stack } from "./algorithms/Stack";
import { CircularDoublyLinkedList } from "./algorithms/linkedList/CircularDoublyLinkedList";
import { SortedLinkedList } from "./algorithms/linkedList/SortedLinkedList";
import { HashTable } from "./algorithms/HashTable";
import { HashTableSeprateChaining } from "./algorithms/HashTableSeparateChaining";
import { BinarySearchTree } from "./algorithms/BinarySearchTree";

const stack = new Stack();
const queue = new Queue();
const deck = new Deck();
const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();
const circularLinkedList = new CircularLinkedList();
const circularDoublyLinkedList = new CircularDoublyLinkedList();
const sortedLinkedList = new SortedLinkedList();
const hashTable = new HashTable();
const hashSeparateChaining = new HashTableSeprateChaining();
const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(11);
binarySearchTree.insert(15);
binarySearchTree.insert(7);
binarySearchTree.insert(5);
binarySearchTree.insert(9);
binarySearchTree.insert(13);
binarySearchTree.insert(20);
binarySearchTree.insert(3);
binarySearchTree.insert(6);
binarySearchTree.insert(8);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(18);
binarySearchTree.insert(25);
binarySearchTree.insert(16);
binarySearchTree.insert(21);
binarySearchTree.insert(48);
binarySearchTree.insert(23);
binarySearchTree.insert(32);

function fn(value: any) {
  if (value % 2 === 0) {
    console.log(value);
  }
}

binarySearchTree.inOrderTraverse(fn);

function recursiveFactorial(number: number): number {
  const cache = new Map();

  if (number == 1 || number == 0) {
    return 1;
  }
  return number * recursiveFactorial(number - 1);
}
