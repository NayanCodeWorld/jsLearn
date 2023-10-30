// 
//function greeting(){console.log(this)}
//console.log(greeting);

//const greeting2 = () => {console.log(this)}
//console.log(greeting2);

//

//!----------------------------------------------------------------

const person = {
    name: 'John',
    greeting(greet, time){
        console.log(`${greet}, ${time}! ${this.name}`);
    }
}
//person.printName();

const person2 = {
    name: 'Roman'
}

// ----------------------- bind || function borrowing -----------------------------------------
//bind person2 with person printName function that's why function can use this as person2

const printName = person.greeting.bind(person2, 'hello', 'good morning'); //only bind
printName(person);

//----------------------- call -----------------------------------------

person.greeting.call(person2, 'hi', 'good afternoon'); // bind and call

//----------------------- apply -----------------------------------------

person.greeting.apply(person2, ['by', 'good night']); // bind and call

//!-------------------------------- currying --------------------------------

function add(a, b){
    return a + b;
}

const addTwoNumber = add.bind(null, 2); // we fixed the first parameter with the help of bind

console.log(addTwoNumber(3));