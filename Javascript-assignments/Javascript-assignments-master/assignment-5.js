// Task (Study the following two topics on your own)
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// Create a function which takes 3 arguments and return the Largest number among the 3
// use ternary operator for conditionals

/*
function largestNum(num1, num2, num3) { 
  if ((num1 > num2) && (num1 > num3)) {
    // console.log("num1 is greater than num2 or num3");
    return num1;
  } else if ((num2 > num1) && (num2 > num3)) {
    // console.log("num2 is greater than num1 and num3");
    return num2;
  } else if ((num3 > num1) && (num3 > num2)) {
    // console.log("num3 is greater than num1 and num2");
    return num3
  }
}
console.log(largestNum(3, 5, 1));
*/

// Take 2 numbers as input from the user and an operation which user wants to perform on those numbers then use the switch statement to implement it and alert the result

/*
var num1 = parseInt(prompt("Enter number1:")) 
var num2 = parseInt(prompt("Enter number2:"))
var operation = prompt("Enter operation:")

switch (operation) {
    case "+":
    case "add":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operation";
      break;
  }
alert(result)
*/

var array = [
  [
    [1, [13, 14], 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, [[16, 17], 18]],
  ],
];


// extract out 17, 14, 18 using the indexing operator and save them in these variables
// const seventeen;
// const fourteen;
// const eighteen;

/*
const seventeen = array[1][1][2][0][1]

const fourteen = array[0][0][1][1]

const eighteen = array[1][1][2][1]
*/

// remove the elements one by one from the array2 and add them into array1 in such a way that the resultant array looks like this
// [1,2,3,4,5,6,7,8,9,10]
// hint(push, pop, shift, unshift)
const array1 = [5, 6, 7];
const array2 = [4, 8, 9, 3, 2, 1, 10];

/*
const removeElement10 = array2.pop();

const removeElement4 = array2.shift();

const removeElement8 = array2.shift();

const removeElement9 = array2.shift();

const removeElement3 = array2.shift();

const removeElement2 = array2.shift();

const removeElement1 = array2.shift();

const addElement4 = array1.unshift(removeElement4)

const addElement3 = array1.unshift(removeElement3)

const addElement2 = array1.unshift(removeElement2)

const addElement1 = array1.unshift(removeElement1)

const addElement8 = array1.push(removeElement8)

const addElement9 = array1.push(removeElement9)

const addElement10 = array1.push(removeElement10)
*/




























