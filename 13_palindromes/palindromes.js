const palindromes = function (text) {
  const specials = [' ', '-', ';', ',', '.', '!', '?'];
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    if (!specials.includes(char)) {
      result += char;
    }
  }

  const reversed = result.split("").reverse().join("");

  return result === reversed;
};

// Do not edit below this line
module.exports = palindromes;
