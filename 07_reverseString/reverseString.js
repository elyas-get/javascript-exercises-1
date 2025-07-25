const reverseString = function(text) {
    let reversed = ''
    for (i= text.length-1; i >=0; i--){
        reversed += text[i]
    }
    return reversed
};
console.log(reverseString('Elyas'))
// Do not edit below this line
module.exports = reverseString;
