// singleton
// object.create

//const TinderUser = new Object() // singleton object
//console.log(TinderUser);

const TinderUser = {}  // non singleton object
console.log(TinderUser);

TinderUser.id = "123abc"
TinderUser.name = "Sammy"
TinderUser.isLoggedIn = false

//console.log(TinderUser);

const regularUser = {
    email: "some@gmai.com",
    fullname:{
        userfullname:{
            firstname: "Navneet",
            lastname: "Kumar"
        }
    }
}

//console.log(regularUser.fullname);

// how to marge object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);

//console.log(TinderUser);

// console.log(Object.keys(TinderUser));
// console.log(Object.values(TinderUser));
// console.log(Object.entries(TinderUser));
// console.log(Object.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// how to extrect value from this course

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

// {
//     name: "hitesh",
//     coursename: "js in hindi",
//     price: "free"
// }

