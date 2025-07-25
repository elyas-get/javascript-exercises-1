const convertToCelsius = function(degreeFara) {
  return ((degreeFara-32)*5)/9 + ' C'
};

const convertToFahrenheit = function(degreeCels) {
  return (degreeCels * (9/5)) + 32 + ' F'
};

console.log(convertToCelsius(32)) // fahrenheit to celsius, should return 0

console.log(convertToFahrenheit(0)) // celsius to fahrenheit, should return 32
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
