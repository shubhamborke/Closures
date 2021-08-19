import { cache } from "../cacheFunction.js";

let count = cache(x => "Added " + x);

let arr = [1,2,3,4,5,3,6,7,4];

for(let i = 0 ; i < arr.length; i++){
    count(arr[i]);
}