// Use the concept of closures and create a function which returns an object with 2 properties of name and age and their setter and getter functions


// function detailObject() {
//   let name;
//   let age;
//   return {
//     setName : function (name) {
//       this.name = name;
//     },
//     setAge : function (age) {
//       this.age  = age;
//     },
//     getName : function () {
//       return this.name;
//     },
//     getAge : function () {
//       return this.age;
//     }
//   }
  
// }

// var obj = detailObject();
// obj.setName("huzaifa");
// console.log(obj.getName());
// obj.setAge(23);
// console.log(obj.getAge());



function createMultiplier(multiplyBy) {
  return function (num) {
    return num * multiplyBy;
  };
}

// use the createMultiplier function to create a multiplier for numbers 4 and 5

// var mulBy4 = createMultiplier(4);  //funtion(num) { retrun num * mul};
// var result = mulBy4(5);

// console.log(result);



// create an object and convert it into string and then convert it back to object using json stringify and parse functions

var personInfo = {
  name : "Huzaifa",
  age : "23"
}

var stringObj = JSON.stringify(personInfo)

var parseObj = JSON.parse(stringObj)

console.log(stringObj);
console.log(parseObj);