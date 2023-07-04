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

const stack = new Stack();
const queue = new Queue();
const deck = new Deck();
const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();
const circularLinkedList = new CircularLinkedList();
const circularDoublyLinkedList = new CircularDoublyLinkedList();
const sortedLinkedList = new SortedLinkedList();
const hashTable = new HashTable();
const hasSeparateChainig = new HashTableSeprateChaining();

hasSeparateChainig.put("Gandalf", "gandald@gmail.com");
hasSeparateChainig.put("Tyrion", "gandald@gmail.com");
hasSeparateChainig.put("John", "john@gmail.com");
const value = hasSeparateChainig.get("John");
console.log(value);
