//! (1) Object Constructor
let object1 = new Object();
console.log(object1);

//! (2) Object's create method
let object2 = Object.create(null);
console.log(object2);

//! (3) Object literal syntax
let mySambol = Symbol("*");
let object3 = { name: "hello", "hello world": 3, [mySambol]: 5 };
console.log(object3);

//! (4) Function constructor
function CreateObject(name) {
  this.name = name;
  this.age = 24;
}

let object4 = new CreateObject("Sonul");
console.log(object4);

//! (5) Function constructor with prototype
function CreateObject2() {}
CreateObject2.prototype.name = "Ramil";
let object5 = new CreateObject2();
console.log(object5);

//* OR
function func() {}
// new func(2, 3, 4);
// console.log(func());

let newObject = Object.create(func.prototype); //create new instance using function prototype
let result = func.call(newObject, 2, 3, 4); // Call the function
console.log(result, typeof result);

//! Singleton function => A Singleton is an object which can only be instantiated one time. Repeated calls to its constructor return the same instance and this way one can ensure that they don't accidentally create multiple instances.
let object6 = new (function () {
  this.name = "hello world";
})();

console.log(object6);
