// ******************* Immediately invoked fucntion expressions***************

(function dB() {  // Named IIFE
  console.log("Database Connected");
})(); // here the semicolon is required to mark the end of iife.

(() => {
  console.log("DATABASE TWO CONNECTED)");
})(); // here the semicolon is required to mark the end of iife.

((name) => {
  console.log(`Hello ${name}`);
})("Abhinav"); // can pass the argument this way