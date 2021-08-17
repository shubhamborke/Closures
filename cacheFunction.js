let arr = [];
const cache = function cacheFunction(cb){
    function cacheStore(){
        if(arr.includes(cb())){
            return arr;
        }else{
            arr.push(cb());
        }
    }
    return cacheStore();
}

export { cache }