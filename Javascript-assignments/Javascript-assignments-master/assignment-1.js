// Create variables and store some data for different data types in them and print their values on the console
var abc = "Hello World!";
var num = 123;
var booleanValue = true;
var floatValue = 10.56;


console.log(abc);
console.log(num);
console.log(booleanValue);
console.log(floatValue);

// Q: Comment which of the following are valid variable names and which are not:
// name       () true
// $name      () true
// _name      () true
// ?name      () false
// 1name      () false
// name1      () true
// name_1     () true
// name-1     () false
// n1a2m3e4   () true
// NAME       () true

// Q: Write what will be printed to the console after running the following code:
/*
  console.log(a);
  var a;
  a = 5;
*/
// Answer: undefined

// Q: Create two variables num1 and num2 and take their values input from the user and perform all the basic arithmetic operations (+,-,*,/,%) on them
var num1 = prompt("Enter num1:");

var num2 = prompt("Enter num2:");

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// Q: Take a number input from the user and show and alert whether the number is even or not

var num = prompt("Enter number:");

if (num % 2 == 0) {
  alert("Number is even");
} else {
  alert("Number is odd");
}

// Q: Replace '?' with the expected values of the variables in each step in the followuing code
/*
  var a = 5;           (a=5, b=?, c=?)
  var b = a++;         (a=?, b=6, c=?)
  var c = ++a;         (a=?, b=?, c=6)

  console.log(a);      (a=5, b=?, c=?)
  console.log(b);      (a=?, b=6, c=?)
  console.log(c);      (a=?, b=?, c=6)
*/