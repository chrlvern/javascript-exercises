const convertToCelsius = function(temp) {
  let convert = (temp - 32)*(5/9);
  if(convert % 1 != 0){
    return Math.round(convert*10)/10;
  }
  else{
    return convert;
  }
};

const convertToFahrenheit = function(temp) {
  let convert = (temp * (9/5)) + 32;
  if(convert % 1 != 0){
    return Math.round(convert*10)/10;
  }
  else{
    return convert;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
