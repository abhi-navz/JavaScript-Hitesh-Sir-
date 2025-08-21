// In JavaScript, the this keyword is a dynamic and powerful reference to an object, but its specific value is determined by the context in which it is used. It essentially refers to the object that is currently executing a piece of code, allowing for more flexible and reusable functions.

const user = {
  userName: "Abhinav",
  age: 23,
  price: 999,

  //In an Object Method
  // When this is used inside a method of an object, it refers to the object that the method is attached to.This allows the method to access other properties and methods of the same object.

  welcomeMessage: function () {
    console.log(
      `Welcome to the course ${this.userName}, you are ${this.age} year old and you have paid ${this.price} rs for this course.`
    );
    // console.log(this);
  },
};

// user.welcomeMessage(); //elcome to the course Abhinav, you are 23 year old and you have paid 999 rs for this course

user.userName = "Abhishek";
user.age = 21;
user.price = 1999;
// user.welcomeMessage(); //Welcome to the course Abhishek, you are 21 year old and you have paid 1999 rs for this course.

// console.log(this); // prints an empty object

const chai = function () {
  const userName = "Abhinav";
  console.log(this.userName); //undefined --->> can't use this keyword inside a funciton expression.
};
// chai();

// ********************* ARROW FUNCTION************************

const chai1 = () => {
  const userName = "Abhinav";
  console.log(this.userName); // undefined
  console.log(this); // {}
};
// chai1();

// ================================= ARROW FUNCTION ======================================

// explicit way
// const addtwoNumbers = (num1,num2) =>{
//     return num1+num2; // will have to write the return keyword if curly braces are used in arrow function
// }

// implicit way
const addtwoNumbers = (num1, num2) => num1 + num2; // works same as above

// console.log(addtwoNumbers(3,4)) // 7

const objectArrow = (num1, num2) => ({ username: "Abhinav" }); // have to wrap in parethesis in order to return.
console.log(objectArrow()); //{ username: 'Abhinav' }

const myarr = [2, 3, 4, 58];
myarr.forEach(() => {}); // use of arrow fucntion inside the foreach loop
