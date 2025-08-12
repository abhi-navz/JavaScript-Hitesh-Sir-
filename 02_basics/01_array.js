let array = ["english", 23, 344];
console.log(array);

// in javascript an array can contlain data of multiple types.
// ARRAy METHODS

// JavaScript array-copy operations create shallow copies.
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.

// const fruits = [];
// fruits.push("banana", "apple", "peach"); // arrays in js are dynamic
// console.log(fruits.length); // 3
// fruits.pop();
// console.log(fruits.length); // 2

// slice and splice methods
let arr = [1, 2, 3, 4, 5, 6];

let arrn1 = arr.slice(0, 3); // will slice array from 0 to 2 , 3 isn't included , it doesn't change the original array.

console.log("A:", arr);
console.log(arrn1);

let arrn2 = arr.splice(0, 3); // will cut array from 0 to 3 , 3 is included , it does change the original array. it cuts out the specified part from the original array.

console.log("B:", arr);
console.log(arrn2);
