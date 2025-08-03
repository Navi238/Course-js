// Dates //

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
 
console.log(myCreatedDate.getTime());

