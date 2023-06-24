import { Deck } from "./algorithms/Deck";
import { LinkedList } from "./algorithms/LinkedList";
import { Queue } from "./algorithms/Queue";
import { Stack } from "./algorithms/Stack";

const stack = new Stack();
const queue = new Queue();
const deck = new Deck();
const list = new LinkedList();

list.push("John");
list.push("Jack");
list.push("Camila");
list.push("Carl");

console.log(list.removeAt(0));
