const sumAll = function(x,y) {
    let total = 0
    if (x > y){
        for (i=y; i <= x; i++){
            total += i
        }
    }
    else{
        for (i=x; i <= y; i++){
            total += i
        } 
    }
    return total
};
console.log(sumAll(1,4))

// Do not edit below this line
module.exports = sumAll;
