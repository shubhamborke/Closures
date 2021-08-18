
const cache = function cacheFunction(cb){
    let arr = [];
    function cacheStore(value){
        let Funcvalue = cb(value)
        if(arr.includes(Funcvalue)){
            return arr;
        }else{
            arr.push(Funcvalue);
            return arr;
        }
    }
    return cacheStore;
}

export { cache }