/* Two type of Data Type 
  1 > primitive   2 > Non primitive  
*/

// primitive
// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non primitive)

// Array, objects, Functions   ----->this all datatype is object

// javascript is static or dynamic?
// ---> dynamically type

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 3456125462568

const heros = ["shaktiman", "naagraj", "doga"]
let myobj = {
  name: "Navneet",
  age: 23,
}

const myfunction = function(){
  console.log("hello world");
  
}