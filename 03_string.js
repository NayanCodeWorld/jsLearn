//! There are two methods of defineing string
// 1)
let str = "hello";
console.log(str);
// 2)
let str2 = new String("hello world");
console.log(str2);

//! Property of string
//* 1) length
let lengthOfString = str2.length;
console.log(lengthOfString);
//* 2) prototype => Allows you to add new properties and methods to an String object.
console.log(str.__proto__);

//! Methods of string
//TODO (1) charAt() => String.charAt(index):char => Returns the character at the specified index.
console.log(str2.charAt(4)); // 'o'
//TODO (2) index() => String.indexOf(string):firstindex => Returns the index of the first occurrence of the specified value in a string.
console.log(str2.indexOf("l")); // 2
//TODO (3) lastIndexOf() => String.lastIndexOf(string):lastIndex => Returns the index of the last occurrence of the specified value in a string.
console.log(str2.lastIndexOf("l")); // 9
//TODO (4) concat() => String.concat(string):string => Returns a string that contains the concatenation of two or more strings
console.log(str2.concat(" ram")); // 'hello world ram'
//TODO (5) includes() => String.includes('char'):boolean => Checks whether a string contains the specified substring.
console.log(str2.includes("w")); // true
//TODO (6) repeat() => String.repeat(number):string => Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
console.log(`hi I am ${" nayan!".repeat(3)}`); // hi I am  nayan! nayan! nayan!
//TODO (7) replace() => String.replace(string):string => Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
console.log("sun".replace("u", "a")); // "san"
//Todo: (8)
console.log();
