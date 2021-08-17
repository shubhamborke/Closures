import { counter } from "../counterFactory.js";

const countFactory = counter();

console.log(countFactory.increment());
console.log(countFactory.increment());
console.log(countFactory.increment());
console.log(countFactory.decrement());
console.log(countFactory.decrement());