// for of loop

const arr = [11, 55, 2, 14, 1, 2, 4, 5, 6, 7, 8];
for (const value of arr) {
  //   console.log(`value printed: ${value} \n`);
}

// Maps
// Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map();
map.set("a", 1);
map.set("b", 15);
map.set("c", 12);

// console.log(map);
// console.log(map.get("a"));
// Expected output: 1

map.set("a", 97);

// console.log(map.get("a"));
// Expected output: 97
// console.log(map.size);
// Expected output: 3
map.delete("b");
// console.log(map.size);
// Expected output: 2
for (const m of map) {
  // console.log(m);
}
for (const [m1, m2] of map) {
  // can hold values differetnly too by destructuring
  // console.log(m1, ": -" , m2);
}

const obj = {
  1: "abhinav",
  2: "abhishek",
  3: "nisha",
  4: "manisha",
};

// for (const kid of obj) {
//   // console.log(kid);  // TypeError: obj is not iterable
// }

// for in loop

for (const key in obj) {
  // console.log(`${key}: ${obj[key]}`);
}

// ======================== For each loop ====================
arr.forEach((el) => {
  //   console.log(el);
});

arr.forEach(function (el) {
  // this or we can directly use arrow function
  // console.log(el);
});

arr.forEach((el, i, arr) => {
  //   console.log("value", el, "index", i, "full array:", arr); // for each also brings the index the whole array with itself along with values
});

const myCoding = [
  {
    languageName: "cpp",
    filename: "first.cpp",
  },
  {
    languageName: "javascript",
    filename: "first.js",
  },
  {
    languageName: "ruby",
    filename: "first.rb",
  },
];

myCoding.forEach((item) => {
  //   console.log(item.filename);
});

const values = arr.forEach((el) => {
  return el;
});
// console.log(values); // undefined --> for each doesn't return anything even with return keyword

// ================================= filter ============================

const ellesstha4 = arr.filter((el) => el > 4);
// console.log(ellesstha4); //  [11, 55, 14, 5,6,  7,  8] //filter returns

const books = [
  { bookName: "book1", genre: "fiction", publish: 1992, latestEdn: 2014 },
  { bookName: "book2", genre: "non-fiction", publish: 1994, latestEdn: 2014 },
  { bookName: "book3", genre: "history", publish: 1996, latestEdn: 2014 },
  { bookName: "book4", genre: "history", publish: 2003, latestEdn: 2014 },
  { bookName: "book5", genre: "psychology", publish: 2002, latestEdn: 2014 },
  { bookName: "book6", genre: "fiction", publish: 2000, latestEdn: 2014 },
];

let userBook = books.filter((bk) => bk.genre === "fiction");
// console.log(userBook);

userBook = books.filter((bk) => bk.publish >= 2000);
// console.log(userBook);

userBook = books.filter((bk) => {
  return bk.genre === "history" && bk.publish >= 1995;
});
// console.log(userBook);

// ================================= MAP function ==================

const newNum = arr.map((num) => num + 10);
// console.log(newNum);

// ====================================chaining===============================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chainedNums = nums
  .map((n) => n * 10)
  .map((n) => n + 1)
  .filter((n) => n >= 40);

// console.log(chainedNums);
//
// ================================= Reduce ===========================================

const n2 = nums.reduce((acc, currval) => {
  return acc + currval;
}, 0);
// console.log(n2);

// ======= finding maximum using reduce  ============

const arr2 = [1, 2, 4, 5, 29, 19, 29, 24];

const max = arr2.reduce((acc, el) => {
  if (el > acc) {
    return el;
  } else {
    return acc;
  }
}, arr2[0]);

// console.log(max);

const max2 = arr2.reduce((acc, curr) => (curr > acc ? curr : acc), arr2[0]); // same asabove
// console.log(max2);

const cart = [
  {
    courseName: "javascript",
    price: 999,
  },
  {
    courseName: "webdev",
    price: 1999,
  },
  {
    courseName: "mobileDevlopment",
    price: 3999,
  },
  {
    courseName: "dataScience",
    price: 8999,
  },
];

const cartPirce = cart.reduce((acc, item) => (acc += item.price), 0);
console.log(cartPirce);
