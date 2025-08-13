let array = ["english", 23, 344];
// console.log(array);

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

// console.log("A:", arr);
// console.log(arrn1);

let arrn2 = arr.splice(0, 3); // will cut array from 0 to 3 , 3 is included , it does change the original array. it cuts out the specified part from the original array.

// console.log("B:", arr);
// console.log(arrn2);

const a1 = [3, 4, 5, 6];
const a2 = [7, 8, 9, 10];

// to combined both the arrays.
// a1.push(a2); // this will push a2 as an element in a1. // modifies the existing array.
// console.log(a1);
const a3 = a1.concat(a2); // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(a3);

// Another way to combine two arrays is using spread operator. spread operator simply spreads elements of array.
const superheros = ["superman", "batman", "shaktiman", "G.one", "flying Jatt"];
const a4 = [...a1, ...a2, ...superheros]; // now a4 holds elements of both a1 and a2. multiple arrays  can be merged together this way, whereas in concat there's limitation of two arrays being concatenated at once.

// console.log("a4:", a4);


const anotherArray = [1,2,[3,4,5,[7,8,9],10],6]
// if i want to spread the elements of all the nested arrays in a single array i can use .flat() method.

const usableAnotherArray = anotherArray.flat(Infinity);
console.log(usableAnotherArray); // [   1, 2, 3,  4, 5, 7, 8, 9, 10, 6 ]

// checking and converting into ARRAY.

// console.log(Array.isArray("hitesh")); // false
// console.log(Array.from("hitesh")); // [ 'h', 'i', 't', 'e', 's', 'h' ]

