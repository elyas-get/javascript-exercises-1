const people = [
    {
    name: "Carly",
    yearOfBirth: 2018,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

const findTheOldest = function(array) {
    const oldest = array.sort((a,b)=>{
    let x = a.yearOfDeath - a.yearOfBirth
    let y = b.yearOfDeath - b.yearOfBirth
    return y - x
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
