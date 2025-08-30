// object literals ----> how to declear object

const mySym = Symbol("key1")

const JsUser = {
    name: "Navneet",
    age: 18,
    location: "Delhi",

    [mySym]: "mykey1"

}

// How to access object

console.log(JsUser.age)
console.log(JsUser["name"]);
console.log(JsUser[mySym]);

JsUser.email = "navneet@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@google.com"

console.log(JsUser);

JsUser.greeting = function(){
   console.log("Hello js user");
   
}
JsUser.greetingTwo = function(){
    console.log((`hello js user, ${this.name}`));
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

