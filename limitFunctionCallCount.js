const limitcall = function limitFunctionCallCount(cb, n){
    let count = 0;
    function limit(value1, value2){
        if(count < n){
            count++;
       return cb(value1,value2);
        }else{
            return "Limit Exeeded";
        }
    }
    return limit;
}

export { limitcall }