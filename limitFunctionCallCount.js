const limitcall = function limitFunctionCallCount(cb, n){
    return cb(n);
}

export { limitcall }