// Create a function named 'logNameAndAge' and pass name and age as params and log them inside the function so that the following code should work

function logNameAndAge(name, age){
  console.log("My name is " + name + " and my age is " + age);
}

logNameAndAge('Hasham', 20)
logNameAndAge('John', 33)

// Create a function to add, subtract, divide, multiply 2 numbers based on the numbers and the operation passed as the parameter
// the following code should work afterwards

/*
function calculate(num1, num2, operator) {
  if (operator == '+') 
  {
    console.log(num1 + num2);
  } 
  if (operator == '*') 
  {
    console.log(num1 * num2);
  }
  if (operator == '-') 
  {
    console.log(num1 - num2);
  }
  if (operator == '/') 
  {
    console.log(num1 / num2);
  }
}

calculate(1, 2, '+')
calculate(5, 9, '*')
calculate(22, 8, '-')
calculate(18, 3, '/')
*/

// Write what will happen in the after running the following code and also explain why.

/*
someFunction();
anotherFunction();

const someFunction = function () {
  console.log('Function was called!')
}


function anotherFunction() {
  console.log('another function was called!')
}
*/

// Answer: It is not possible to access the function call 'someFunction();' before the initialization, so it caught error in console but if we call the 'someFunction();' function after initialization, it will be called. As far as the concern of creating the function 'anotherFunction();' so it can be call anywhere.