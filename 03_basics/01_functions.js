// function syntax in javascript
// 1. Fucntion declaration
function twoSum(a, b) {
  console.log(a + b);
}

//calling  the function
// twoSum(3, 5); // 8

// 2. function expression
const multiply = function (a, b) {
  return a * b;
};

// console.log(multiply(4, 5)); // 20

// arrow function
const divide = (a, b) => a / b;
// console.log(divide(10, 2)); // 5

const greeting = function (name = "defulatName") {
  console.log(`Hello ${name}`);
};
// greeting("Abhinav")

// REST OPERATOR

function calculateCartPirce(...num) {
  // now it'll pack all the arguments and send it as an array
  return num;
}

// console.log(calculateCartPirce(300,400,200)); //[ 300, 400, 200 ]

function calculateCartPirce2(val1, val2, ...num) {
  // the first two arguments will be stored in val1 and val2 and rest will be packed in num
  return num;
}

// passing object as an argument
const user = {
  userName: "Abhinav",
  age: 23,
  cartValue: 540,
};

const handleObject = function (object) {
  console.log(
    `The user is ${object.userName} and his age is ${object.age} and his cart value ${object.cartValue}`
  );
};

// handleObject(user); //The user is Abhinav and his age is 23 and his cart value 540
// handleObject({
//   userName: "Abhishek",
//   age: 21,
//   cartValue: 5999,
// });  // The user is Abhishek and his age is 21 and his cart value 5999

// Passing ARRAY as an argument.

const returnSecondValue = function (arr) {
  return arr[1];
};
const arr1 = [2, 3, 4, 5, 6, 6];
// console.log(returnSecondValue(arr1)); // 3
// console.log(returnSecondValue([2, 4, 5, 6, 7])); // 4 can directly pass the array in the function

