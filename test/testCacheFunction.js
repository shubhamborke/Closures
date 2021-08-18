import { cache } from "../cacheFunction.js";

let count = cache(x => x + 3);
console.log(count(1))
console.log(count(2))
console.log(count(3))
console.log(count(1))
console.log(count(4))
console.log(count(5))
console.log(count(6))
console.log(count(7))
console.log(count(3))
console.log(count(5))
console.log(count(8))