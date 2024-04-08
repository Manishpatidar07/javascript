//singleton 
//object.create




//object literals
 const Jsuser = {
    name: "manish"

 }

//console.log(Jsuser["age"])

Jsuser.greeting = function() {
    //console.log("hello Js user");    
}
//console.log(Jsuser.greeting);

//o4_object.js Singleton

//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "manish"
tinderUser.isLoggedin = false

//console.log(tinderUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


//05_objects.js  object 

const course = {
    coursename: "Js as hindi",
    courseprice: "999",
    courseInstructor: "manish"

}
// course.courseInstructor

const{courseInstructor} = course
console.log(courseInstructor);