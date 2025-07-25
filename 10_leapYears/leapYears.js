const leapYears = function(year) {
    if (year%4 ==0){
        if(year%100 == 0 && year % 400 !==0){
            return 'not a leap-year'
        }
        return 'leap-year'
    }
    else{
        return 'not a leap-year'
    }

};

// Do not edit below this line
module.exports = leapYears;
