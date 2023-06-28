import { Deck } from "./algorithms/Deck";
import { LinkedList } from "./algorithms/LinkedList";
import { Queue } from "./algorithms/Queue";
import { Stack } from "./algorithms/Stack";

const stack = new Stack();
const queue = new Queue();
const deck = new Deck();
const list = new LinkedList();

const user = {
  name: "Christofher",
  email: "lucaschristofher05@gmail.com",
  password: "281022",
};

list.push(user);

const str = list.toString();

console.log(str);
