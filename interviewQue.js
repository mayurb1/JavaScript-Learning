//-------------> 1. Difference between null vs undefined?

var nothing = null;
console.log(nothing); 
console.log(typeof(nothing)); // this will return object and that is a bug in js because null has no value 

var somethingWithoutValue;
console.log(somethingWithoutValue);
console.log(typeof(somethingWithoutValue));

//-------------> 2. What is NaN?

//NaN is a property of global object
//In other words it is a variable in global scope
//Full form of NaN is (Not-a-Number)
// it is usefull in validation (isNaN) to check either variable is number or not

var name = 'mayur';
var age = 21;

console.log(isNaN(name));
console.log(isNaN(age));

//-------------> NaN practice

// NaN === NaN;
// age.NaN === NaN;
// isNaN(NaN);
// isNaN(age.NaN);
// age.isNaN(NaN)

console.log(NaN === NaN);
console.log(age.NaN === NaN);
console.log(isNaN(NaN));
console.log(isNaN(age.NaN));
// console.log(age.isNaN(NaN));

