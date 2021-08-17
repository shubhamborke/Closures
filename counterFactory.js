const counter = function counterFactory(){
    let value = 0;
    let obj = {
       increment: function increment(){
           return value += 1;
       },
       decrement: function decrement(){
           return value -= 1;
       }
    }

    return obj;
}

export { counter }