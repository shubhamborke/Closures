import { limitcall } from "../limitFunctionCallCount.js";

function callBack(x){
    for(let i = 0; i < x; i++){
        console.log(i);
    }
}

limitcall(x => callBack(x), 10);