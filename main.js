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

let age = 100
const checkYear = function () {
    if(age > 12) {
        var dogYears = age * 7
        console.log(dogYears)
        console.log('suraj')
    }
}

console.log(888)

console.log(checkYear())

