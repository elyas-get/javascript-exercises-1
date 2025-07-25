const removeFromArray = function(array, removeFromArray) {
    if (!Array.isArray(array)) {
        throw new TypeError('Input must be an array');
  }
  const updated = array.filter(n => n !== removeFromArray)
  return updated
};
console.log(removeFromArray([1,2,3,4,5,6,6],6))
// Do not edit below this line
module.exports = removeFromArray;
