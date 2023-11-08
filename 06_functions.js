//
//function greeting(){console.log(this)}
//console.log(greeting);

//const greeting2 = () => {console.log(this)}
//console.log(greeting2);

//

//!----------------------------------------------------------------

// const person = {
//   name: "John",
//   greeting(greet, time) {
//     console.log(`${greet}, ${time}! ${this.name}`);
//   },
// };
// //person.printName();

// const person2 = {
//   name: "Roman",
// };

// ----------------------- bind || function borrowing -----------------------------------------
// //bind person2 with person printName function that's why function can use this as person2

// const printName = person.greeting.bind(person2, "hello", "good morning"); //only bind
// printName(person);

// //----------------------- call -----------------------------------------

// person.greeting.call(person2, "hi", "good afternoon"); // bind and call

// //----------------------- apply -----------------------------------------

// person.greeting.apply(person2, ["by", "good night"]); // bind and call

//!-------------------------------- currying --------------------------------

// function add(a, b) {
//   return a + b;
// }

// const addTwoNumber = add.bind(null, 2); // we fixed the first parameter with the help of bind

// console.log(addTwoNumber(3));

//!---------------------- throttle (limit the excuation of event handler function)------------------------------------------
// const throttleFunction = (handlerFunction, limit) => {
//   let inThrottle;
//   return function (...args) {
//     if (!inThrottle) {
//       handlerFunction.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// };

// let handlerFunction = () => console.log("call function");

// window.addEventListener("scroll", () => {
//   throttleFunction(handlerFunction, 100);
// });

//!----------------- debouncing (delaying execution of some piece of code until a specified time) -----------------------------------------------
// const debounceFun = (targetFun, time = 500) => {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       targetFun.apply(this, args);
//     }, time);
//   };
// };

// const targetFun = () => console.log("Fetching start....");

// const eventHandlerFun = debounceFun(targetFun);

// {
//   /* <input type="text" onkeyup="processChange()" />
// <button onclick="processChange()"> Click me</button>
// window.addEventListener("scroll", processChange); */
// }
