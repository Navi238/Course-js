/* 
.............About Memory.............

Stack, Heap

Stack ----> This is used in primitive datatype (what we declear we got a value or copy through stack)
Heap -----> This is udes in Non-Primitive datatype (In Heap we get Reference or we can say original value)


*/

// Example of Stack
let myYoutubename = "TradewithNavi"

let anothername = myYoutubename
anothername = "NaviwithFin"

console.log(myYoutubename);
console.log(anothername);

// Example of Heap
let userone = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userone

userTwo.email = "Navneet@google.com"              // in Object we access anything by taking .(dot) jst like this .email

console.log(userone.email);
console.log(userTwo.email);

