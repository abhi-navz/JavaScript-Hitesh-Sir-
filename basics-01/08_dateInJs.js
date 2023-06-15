//Date in js
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 7, 23);
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2023, 7, 23, 5, 23);
// console.log(myCreatedDate.toLocaleString());
// months starts from 0 in JS

let anotherDate = new Date("2023-08-23");
console.log(anotherDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
