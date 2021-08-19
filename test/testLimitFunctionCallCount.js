import { limitcall } from "../limitFunctionCallCount.js";


const loopFunc = limitcall((x, y) => x + y, 5);


let arr = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0 ; i < arr.length; i++){
    console.log(loopFunc(arr[i], arr[i]));
}