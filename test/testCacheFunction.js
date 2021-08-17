import { cache } from "../cacheFunction.js";

cache(x => x = 1)
cache(x => x = 2)
cache(x => x = 3)
cache(x => x = 4)
console.log(cache(x => x = 3))
cache(x => x = 5)
cache(x => x = 6)
cache(x => x = 7)
console.log(cache(x => x = 5))