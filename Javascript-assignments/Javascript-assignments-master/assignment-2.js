// Given 2 strings, create a new string by concatenating the original string using the '+' operator and the concat method
const string1 = 'Hello'
const string2 = ' World'

const stringMsg = string1 + string2;

// Given a string, using loops print each character of the string on a new line
const loopsWithString = 'Pakistan'

for (var i = 0; i < loopsWithString.length; i++) {
    console.log(loopsWithString[i]);
}

// How you will get the last character from a string
// let string = 'Hello World'
// Answer: var lastChar = string[string.length - 1];

// What is the equivalent method for the index operator '[]' to get the character of a certain position from a string

//Answer: indexOf();

// Given the following string:
// let string = 'Pakistan'
// How you will get the ascii code of the letter at the index 4

//Answer: console.log(string.charCodeAt(4));

// Given an array of filenames, iterate over the array & print true on the console if the file is a txt file
const files = ['document.txt', 'hello.docx', 'names.xlsx', 'profile.txt', 'sample.ppt']

for (var i = 0; i < files.length; i++) {
    if (files[i].endsWith (".txt")) {
        console.log(true);
    }
}
// Take an string as input from the user and print whether the string contains a vowel or not and also tell at which index the vowel occurs at first
// var arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

// var userInput = prompt("Enter string value:")
// for (var i = 0; i < arr.length; i++) {
//     if (userInput.includes(arr[i])) {
//         alert("Vowel found") //at" + userInput.indexOf(userInput));
//     } else {
//         alert("Vowel not found");
//     }
// }

// Given an string replace the character 'a' with 'e' and 'll' with 'oo'
const stringToChange = 'Hello World as Javascript';

var strChange = stringToChange.replace(/a/g, "e");
var strToChange = stringToChange.replace(/ll/g, "oo");

console.log(strChange);


// Given an string like this -> '12:00:00'
// Extract out the hrs, minutes and seconds from it.

var timeString = '12:00:00'
console.log(timeString.split(':'));


// Take an string as input from user and also take a number as count and repeat the entered string count times and alert it
// Example:
// Entered string: 'Hello'
// Entered count : 3
// Result        : 'HelloHelloHello'
// Note: Use the builtin method to implement it

var userMsg = prompt("Enter message:")

var repeatMsg = prompt("Enter count:")

var showMsg = userMsg.repeat(repeatMsg)

alert(showMsg)