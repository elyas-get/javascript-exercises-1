const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

const getTheTitles = function(array) {
    let titles = []
    for (i=0;i<array.length; i++){
        titles.push(array[i].title)
    }
    return titles
};

console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
