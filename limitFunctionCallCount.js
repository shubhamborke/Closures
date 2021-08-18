const limitcall = function limitFunctionCallCount(cb, n){
    let value = n;
    function loop(){
       return cb(value);
    }
    return loop;
}

export { limitcall }