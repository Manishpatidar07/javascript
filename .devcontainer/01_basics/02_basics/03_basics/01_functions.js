// function sayMyname(){
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }
//sayMyname()

// 
function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}
// const result = addTwoNumbers(3,4)
// console.log(result);
function calculateCartPrice (...num1){
    return num1
}
// console.log(calculateCartPrice (200,400,500));

const user = {
    username: "manish",
    price: 199
}
function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handelobject(user)

const myNewArray  = [200,400,800]
function returnSecondValue(getArray){
    return getArray [1]
}
console.log(returnSecondValue(myNewArray));