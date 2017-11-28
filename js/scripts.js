var add = function(number1, number2) {
  return number1 + number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var remainder = function(number1, number2) {
  return number1 % number2;
};

var bmi = function(number1) {
  return number1 -32*5/9;
};

var number1 = parseInt(prompt("enter a number:"));



alert(bmi(number1));
