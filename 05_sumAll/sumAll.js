const sumAll = function(num1, num2) {
    let fact = num1;
    if(num1 < 0 || typeof num1 != "number" || num2 < 0 || typeof num2 != "number")
    {
        return "ERROR";
    }
    else if(num1 > num2){
        fact = num2;
        for(let i = num2; i < num1; i++){
            fact+= i+1;
        }
        return fact;
    }
    else{
        for(let i = num1; i < num2; i++){
            fact+= i+1;
        }
        return fact;
    }
};

// Do not edit below this line
module.exports = sumAll;
