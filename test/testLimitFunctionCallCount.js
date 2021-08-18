import { limitcall } from "../limitFunctionCallCount.js";

function callBack(x){
    for(let i = 0; i < x; i++){
        console.log(i);
    }
}
const loopFunc = limitcall(x => callBack(x), 10);
console.log(loopFunc());