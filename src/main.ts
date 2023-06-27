import { Deck } from "./algorithms/Deck";
import { DoublyLinkedList } from "./algorithms/DoublyLinkedList";
import { LinkedList } from "./algorithms/LinkedList";
import { Queue } from "./algorithms/Queue";
import { Stack } from "./algorithms/Stack";

const stack = new Stack();
const queue = new Queue();
const deck = new Deck();
const list = new LinkedList();
const doublyList = new DoublyLinkedList();

doublyList.insert("John", 0);
doublyList.insert("Jack", 1);
doublyList.insert("Camila", 2);
doublyList.insert("Carl", 3);
doublyList.insert("Ingrid", 4);
