// Take age as input from the user and alert 'allow' or 'deny' based on the conditions
// - the user's age is greater than or equal to 18 years (allowed)
// - the user's age is less than 18 (denied)

/*
var checkAge = prompt("Enter your Age:")

if (checkAge >= 18) {
  alert("allowed")
} else {
  alert("denied")
}
*/

// Take a number input from the user and alert the message based on the following conditions
// alert('Condition 1 fulfilled'): if the number is between 2 and 5 inclusive
// alert('Condition 2 fulfilled'): if the number is between 6 and 10 inclusive
// alert ('Condition 3 fulfilled'): if the number is greater than 10

/*
var userNum = prompt("Enter number:")

if (userNum >= 2 && userNum <= 5) {
  alert('Condition 1 fulfilled')
}

if (userNum >= 6 && userNum <= 10) {
  alert('Condition 2 fulfilled')
}

if (userNum > 10) {
  alert('Condition 3 fulfilled')
}
*/

// Which opertor is used to check whether a property exists on that object
// Answer: ===

// check whether the property 'property2' exists on the object
const exampleObject = {
  property1: "value1",
  property3: "value3",
};
if (exampleObject.property2 === true ) {
  console.log("its in the property");
} else {
  console.log("not existed");
}

// Comment what will be the result of the following conditional checks
console.log(5 == 8);              // false
console.log(undefined == null);   // true
console.log(0 == false);          // true
console.log("2" != 2);            // false
console.log(1 !== true);          // true
console.log(undefined != null);   // false
console.log("0" != false);        // false
console.log(!false);              // true
console.log(1 === true);          // false
console.log(0 === 0);             // true
console.log(1 != true);           // false
console.log(0 !== false);         // true
console.log(0 != false);          // false
console.log("4" == 4);            // true
console.log("0" === false);       // false
console.log("0" == false);        // true
console.log(0 === false);         // false
console.log(1 == true);           // true
console.log(7 != 7);              // false
console.log(!true);               // false
console.log(undefined === null);  // false
console.log(4 !== 2);             // false
console.log("2" === 2);           // false
console.log("2" !== 2);           // true
console.log(undefined !== null);  // true
console.log("0" !== false);       // true

// Take a number input from the user and log the table of that number

/*
var num = prompt("Enter number:")

console.log(num + ' * ' + '1 ' + '= ' + num*1);
console.log(num + ' * ' + '2 ' + '= ' + num*2);
console.log(num + ' * ' + '3 ' + '= ' + num*3);
console.log(num + ' * ' + '4 ' + '= ' + num*4);
console.log(num + ' * ' + '5 ' + '= ' + num*5);
console.log(num + ' * ' + '6 ' + '= ' + num*6);
console.log(num + ' * ' + '7 ' + '= ' + num*7);
console.log(num + ' * ' + '8 ' + '= ' + num*8);
console.log(num + ' * ' + '9 ' + '= ' + num*9);
console.log(num + ' * ' + '10 ' + '= ' + num*10);
*/

// Take 2 numbers as input from the user and alert whether the first number is completely divisible by second or not.

/*
var num1 = prompt("Enter number1:")
var num2 = prompt("Enter number2:")

if (num1 % num2 == 0) {
  alert("first number is divisible by second")
} else {
  alert("first number is not divisible by second")
}
*/