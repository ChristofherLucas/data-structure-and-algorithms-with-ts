import { CircularLinkedList } from "./algorithms/linkedList/CircularLinkedList";
import { Deck } from "./algorithms/Deck";
import { DoublyLinkedList } from "./algorithms/linkedList/DoublyLinkedList";
import { LinkedList } from "./algorithms/linkedList/LinkedList";
import { Queue } from "./algorithms/Queue";
import { Stack } from "./algorithms/Stack";
import { CircularDoublyLinkedList } from "./algorithms/linkedList/CircularDoublyLinkedList";
import { SortedLinkedList } from "./algorithms/linkedList/SortedLinkedList";
import { intersection, union } from "./algorithms/operationsSets";

const stack = new Stack();
const queue = new Queue();
const deck = new Deck();
const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();
const circularLinkedList = new CircularLinkedList();
const circularDoublyLinkedList = new CircularDoublyLinkedList();
const sortedLinkedList = new SortedLinkedList();

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add({ name: "John" });
setB.add(4);
setB.add(5);
setB.add(6);

const join = intersection(setA, setB);

console.log(join);
