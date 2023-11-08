// let uri = "employeeDetails?name=john& occupation=manager";
// let encoded_uri = encodeURI(uri);
// console.log(encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log(decoded_uri);

//------------------------ Memoiz -----------------------------------------

// const memoizAddition = () => {
//   let cache = {};
// console.log(cache);
//   return (value) => {
//     if (value in cache) {
//       console.log("Fetching from cache");
// console.log(cache);
//       return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//     } else {
//       console.log("Calculating result");
//       let result = value + 20;
//       cache[value] = result;
// console.log(cache);
//       return result;
//     }
//   };
// };
// returned function from memoizAddition
// const addition = memoizAddition();

// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached

//----------------------------------------------------------------

// var employee1 = { firstName: "John", lastName: "Rodson" };
// var employee2 = { firstName: "Jimmy", lastName: "Baily" };
//
// function invite(greeting1, greeting2) {
//   console.log(
//     greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
//   );
// }
//
// invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
// invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?

//--------------------- Temporal Dead Zone -----------------------------------------------------
// function someMethd() {
//   console.log(employee1); // undefined
//   console.log(employee2); // Reference error
//   var employee1 = 1;
//   let employee2 = 2;
// }

// someMethd();

//---------------------( IIFE )----------------------------------------------
// (function () {
//   var message = "IIFE";
//   console.log("inside the function", message);
// })();

// console.log("outside the function", message);

//The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world.
//-----------------Diffrence Between For...of and For...in-----------------
// var arr = [3, 5, 7];
// arr.foo = "hello";
// console.log(arr); // [ 3, 5, 7, foo: 'hello' ]
// for (var i in arr) {
//   console.log(i); // logs "0", "1", "2", "foo"
// }

// for (var i of arr) {
//   console.log(i); // logs "3", "5", "7"
// it doesn't log "3", "5", "7", "hello"
// }

//-----------------------------------------------------------------------------------
// var promise1 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 500, "one");
// });
// var promise2 = new Promise(function (resolve, reject) {
//   setTimeout(resolve, 100, "two");
// });

// Promise.all([promise1, promise2]).then((value) => {
//   console.log(value);
//   console;
// });

// Promise.race([promise1, promise2]).then(function (value) {
//   console.log(value); // "two" // Both promises will resolve, but promise2 is faster
// });

// Promise.allSettled([promise1, promise2]).then(function (value) {
//   console.log(value); // "two" // Both promises will resolve, but promise2 is faster
// });

//----------------------------------------------------------------
// let x = 1;

// if (!!x) {
//   console.log("true");
// } else {
//   console.log("false");
// }
//----------------------------------------------------------------
//console.log(typeof eval("1" + "2"));
//----------------------------------------------------------------
function countParameters(a, b, c) {
  console.log();
}

countParameters(2, 4, 5, 5, 6, 7);

console.log(countParameters.length);
