// Objects in javascript

// Singelton Objcet:
// Object.create // this is the constructor methods which makes singleton objects.
// const user1 = new Object()

// Object literals
const mySym = Symbol("key1");

const user = {
  fullName: "Abhinav",
  "nick Name": "Abhi",
  age: 22,
  university: "DUCs",
  email: "abhinavg556.mca25@cs.du.ac.in",
  [mySym]: "mykey1", //this is they syntax to use a syboll as a key in objects
};

// console.log(user);
// console.log(user.email);
// // another better approach is
// console.log(user["fullName"]);
// // console.log(user.nickName); // won't work
// console.log(user["nick Name"]); // works this way
// console.log([mySym]);
// console.log(user[mySym]);

// modifying object  elements.

user.email = "abhinavg01441@gmail.com";
// console.log(user.email);
// Object.freeze(user)  // now it'll prevent object user from bing modified
// console.log(user);

user.greeting = function () {
  // can add a new property this way,even a fucntion can be added this way
  console.log(`hello JS User ${this.fullName}`);
};

// console.log(user.greeting); // it'll just pass reference of function
// console.log(user.greeting());   //  it'll call the function and execute.

const ob1 = {
  1: "a",
  2: "b",
};

const ob2 = {
  3: "c",
  4: "d",
};
// const ob3 = { ob1, ob2 }; // { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } } ob3 will contain ob2 and ob1 and two different objects

const obj4 = Object.assign({}, ob1, ob2); // it'll assign the sources ob1 and ob2 into new target object {} and returns the target object
// console.log(obj4);

const ob3 = { ...ob1, ...ob2 }; //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } objects can be merged using spread operator.

// console.log(ob3);

const tinderUser = {
  id: "abc123",
  name: "Abhinav",
  emailId: "abhinavg556@gmail.com",
  isLoggedIn: false,
};

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'emailId', 'isLoggedIn' ] it returns an array of keys. which can be looped through.
console.log(Object.values(tinderUser)); // [ 'abc123', 'Abhinav', 'abhinavg556@gmail.com', false ]
console.log(Object.entries(tinderUser)); // returns an array containing every entry as an array with first element as key and 2nd entry as value.
// output [
//     [ 'id', 'abc123' ],
//     [ 'name', 'Abhinav' ],
//     [ 'emailId', 'abhinavg556@gmail.com' ],
//     [ 'isLoggedIn', false ]
//   ]

console.log(tinderUser.hasOwnProperty("emailId")); // to check if the object have this property(key)
