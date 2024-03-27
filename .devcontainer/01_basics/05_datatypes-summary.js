// primitive datatype
// 7 types of DT
// String, number, boolean, null, undefined , symbol , bigInt

//Reference (Non primitive)
//Array , objects, function

const heros = ["Akshay" , "Ajay"  , "Raju"]; //Array Example


let Myobj = {     //object example
    name: "manish",
    age: 22,
}

const myFunction = function(){
//console.log("Hello world");
}

// https:262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++ Type of memory+++++++++++++++++++++++
//Stackmemory(primitive), Heapmemory(Non-primitive)

let myYoutubename = "manishpatidar"
let anothername = myYoutubename;
anothername = "chaiorcode"
//console.log(myYoutubename);
//console.log(anothername);

let userOne = {
     email: "manish@gmail.com"

}
let  userTwo = userOne
userTwo.email = "patidar@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

