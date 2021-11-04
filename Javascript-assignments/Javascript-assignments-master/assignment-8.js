// (Note: use higher order array methods)

// Given an array of numbers create a new array with squares of the numbers

const numbers = Array(10)
  .fill(5)
  .map(() => parseInt(Math.random() * 100 + 5));

// const squareNum = numbers.map(num => Math.pow(num, 2));
// console.log(squareNum);

// Given a mixed array filter out the even numbers from the array

// const numbers = Array(10)
//   .fill(10)
//   .map(() => parseInt(Math.random() * 100 + 5));

// const evenNumbers = numbers.filter(num => num % 2 == 0)
// console.log(evenNumbers);

// Given an array of objects having a property age on them print how many of them are eligible to get an NIC i.e their age is greater than or equal to 18

const persons = Array(10)
  .fill(10)
  .map(() => ({
    age: parseInt(Math.random() * 80 + 10),
  }));

// const ageForNic = persons.filter(person => person.age >= 18)
// console.log(ageForNic);


// Print on the screen whether all of the persons in the person array are eligible for NIC


// const checkForNic = ages => ages.age >= 18;
// console.log(persons.every(checkForNic));

// Print on the screen whether some of the persons in the person array are eligible for NIC

// const checkForNic = ages => ages.age >= 18;
// console.log(persons.some(checkForNic));

// Use the array of numbers from the first question and calculate the sum of all the numbers using the reduce function

// const squareNum = numbers.map(num => Math.pow(num, 2));
// const sumOfNum = squareNum.reduce((previousNum, currentNum) => previousNum + currentNum, 0)
// console.log(squareNum);
// console.log(sumOfNum);

// Use the array of numbers from the first question and print the minimum of all the numbers using the reduce function


// const squareNum = numbers.map(num => Math.pow(num, 2));
// const minOfNum = squareNum.reduce((previousNum, currentNum) => {
//   if (previousNum > currentNum) {
//      previousNum = currentNum 
//     }
//     return previousNum
//   })
//   console.log(squareNum);
// console.log(minOfNum);


// Use the array of numbers from the first question and print the maximum of all the numbers using the reduce function


// const squareNum = numbers.map(num => Math.pow(num, 2));
// const maxOfNum = squareNum.reduce((previousNum, currentNum) => {
//   if (currentNum < previousNum) {
//     currentNum = previousNum
//   }
//   return currentNum
// })
// console.log(squareNum);
// console.log(maxOfNum);