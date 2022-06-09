//  function makeFunc() {
//      var name = 'Mozila'; 
//      function displayName() {
//         return alert(name); 
//      }
//      return displayName; 
//  }

//  var myFunc = makeFunc(); 
//  myFunc()

// function makeAdder(x) {
//     return function (y) {
//         return x + y; 
//     }
// }

// var add5 = makeAdder(5); 
// var add10 = makeAdder(10); 
// console.log(add5(10))

// let e = 10; 
// function sum(a) {
//     return function sum2(b) {
//         return function sum3(c) {
//             return function sum4(d) {
//                 return a+b+c+d+e; 
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4))

// let sum2 = sum(1); 
// let sum3 = sum2(2); 
// let sum4 = sum3(3); 
// let result = sum4(4);
// console.log(result)

// let shape = class MySpape {
//     constructor(height, width) {
//         this.height = height; 
//         this.width = width; 
//     }
// }

// console.log(shape.name); 

// let age = 100
// if (age > 12) {
//     let dogYears = age * 7
//     console.log(`You are ${dogYears} dog years old`)
// }

// console.log(999)
// console.log(dogYears)

// let age = 100
// const checkYear = (() => {
//     if(age > 12) {
//         var dogYears = age * 7
//         console.log(dogYears)
//         console.log('Suraj')
//         return 5
//     }
// })()

// console.log('Mishra')
// console.log(checkYear)
// console.log('Human')

//object destructuring/deep copy/shallow copy
// let myArray = [1, 2, 3, {user: 'suraj'}, {password: 'mishra'}]
// let {user} = myArray[3]
// let {password} = myArray[4]
// let newArray = [...myArray.slice(0, 3), {user}, {password}]
// newArray[3].user = 'Shova'
// console.log(myArray)
// console.log(newArray)

//reference copy
// let myObj = {
//     user: 'suraj',
//     age: 30
// }
// let referenceCopy = myObj
// console.log('referenceCopy', referenceCopy)

// //deep copy
// let deepCopy = {
//     name: myObj.user,
//     age: myObj.age
// }
// deepCopy.user = 'Shova'
// console.log('deepcopy', deepCopy)
// console.log('myobj', myObj)

// //object destructuring method for deep copy
// let {user, age} = myObj
// let destructuringObj = {user, age}
// destructuringObj.user = 'alia'
// destructuringObj.age = 22
// console.log('destructuringObj', destructuringObj)

// //array spreading method for deep copy
// let array = [1, 2, 3, 4]
// let newArray = [...array]
// newArray[0] = 5
// console.log('array', array)
// console.log('newArray', newArray)

// spreading method for deep copy of object array
// let myArray = [1, 2, 3, {game: 'voleyball'}, {score: 10}, 4, 5]
// let {game} = myArray[3]
// let {score} = myArray[4]

// let newMyArray = [...myArray.slice(0, 3), {game}, {score}, ...myArray.slice(5, 7)]
// newMyArray[0] = 'Suraj'

// console.log(myArray)
// console.log(newMyArray)

// //destructuring in array can be done with rest method as well inside a function parameter
// function myFunc(firstElement, ...rest) {
//     firstElement = 'Sujan'
//     console.log(firstElement)
// }

// myFunc(myArray)

//hoisting example
//this prints undefined JavaScript to console because variable message gets hoisted but it 
//can never read the value Hello since the message variable is declared and initialized at last
// hello('JavaScript')
// function hello(input) {
//     console.log(`${message} ${input}`)
// }
// var message = 'Hello'

hello('JavaScript')
var hello = function (lang) {
    console.log(`Hello ${lang}`)
}

// function hello() {
//     console.log('Hello')
// }




