
const cache = function cacheFunction(cb) {
    let obj = {};
    function cacheStore(argument) {
        let count = 0;
        for (let key in obj) {
            if (key === `${argument}`) {
                count++;
            }
        }
        if (count === 1) {
            console.log(obj);
        } else {
            obj[argument] = cb(argument);
        }
    }
    return cacheStore;
}

export { cache }