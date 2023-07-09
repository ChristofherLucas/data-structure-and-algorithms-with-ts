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
// binarySearchTree.insert(7);
binarySearchTree.insert(0);
console.log(binarySearchTree);
