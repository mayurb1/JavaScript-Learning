// ********* section 1 👉🏻 console *************

console.log('Hello world!');

// section end

// ********* section 2 👉🏻 Values and variables *************

var myName = 'Mayur bhalgama';
console.log(myName);

// ********* section 3 👉🏻 Data types *************
// BUNSIS (pronounse it as bansis) =>>>>>> Boolean, undefined, Number, String, integer, Symbol

var myAge = 21;
var imMayur = true;
console.log(typeof(myAge));
console.log(typeof(myName));
console.log(typeof(imMayur));

// ********* section 👉🏻 Important questions and things *************

// 10 + '20'
console.log(10 + '20'); // ---> ans will be 1020, because string and number concates rather than addiotion
// 5 - '2'
console.log(5 - '2'); // ----> this will perform substraction as this is a js bug, because we can not substract a number form a string value
// 'mayur' + 'bhalgama'
console.log('mayur ' + 'bhalgama'); // ----> String concationaltion 
// '' + '' 
console.log('' + ''); // you will not get any output as both are empty 
// '' + 0 
console.log('' + 0 ); 
// 'mayur' - 'bhalgama'
console.log('mayur' - 'bhalgama'); // NaN, because on string we can not perform substration
// true + true
// ture + false 
// false + true
// false - true
console.log(true + true); // here true=1 and false=0
console.log(true + false);
console.log(false + true);
console.log(false - true);

