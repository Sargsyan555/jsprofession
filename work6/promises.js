//TAsk 1
// Write a function that accepts two promises as arguments and returns a new promise
// that resolves with the sum of their values. For example, if you call the function with
// promises that resolve to 3 and 5, respectively, the new promise should resolve to 8.

let firstPromise = Promise.resolve(3)
let secodPromise = Promise.resolve(5)

function sumOfPromeses(firstPromise, secodPromise){
    return Promise.all([firstPromise, secodPromise]).then(res => res.reduce((acc, item) => acc += item, 0))

}
//sumOfPromeses(firstPromise, secodPromise).then(console.log)

// Implement a function that accepts an array of promises and returns a new promise that
// resolves with an array of their resolved values. For example, if you call the function
// with an array containing promises that resolve to 3, 5, and 7, respectively, the new promise
// should resolve to an array containing the values 3, 5, and 7.
//TAsk 2
let array = Promise.all([
    new Promise(res => res(1)),
    new Promise(res => res(2)),
    new Promise(res => res(3))
])

function  arrayOfPromises(array){
    return new Promise(res => array.then(console.log))
}
//arrayOfPromises(array)
//or
let promise1 = new Promise(res => res(1))
let promise2 = new Promise(res => res(2))
let promise3 = new Promise(res => res(3))
function arrayOfPromisesOr(array){
    return Promise.all(array).then(console.log)
}
//arrayOfPromisesOr([promise1, promise2, promise3])

// function arrayOfPromisesOr(array){
//     return Promise.all(array)
// }
// arrayOfPromisesOr([promise1, promise2, promise3]).then(console.log)

//TAsk 3
 
// Write a function that accepts a number and returns a promise that resolves after that
// number of seconds has elapsed. For example, if you call the function with 5, the promise
// should resolve after 5 seconds.

function resolveWithParam(delay){
     return new Promise(res => {
        setTimeout(() => {
            res(delay)
        }, delay)
     })
}
//resolveWithParam(2000).then(console.log)

//TAsk 4
// Implement a function that accepts an array of functions that return promises, and returns
//  a new function that returns a promise that resolves with an array of their resolved values.
//   For example, if you call the function with an array containing two functions that return
//   promises that resolve to 3 and 5, respectively, the new function should return a promise
//   that resolves to an array containing the values 3 and 5.
let func1 = function(){
    return new Promise((res) => res(2))
}
let func2 = function(){
    return new Promise((res) => res(3))
}

function some(array){
    return function(){
        return new Promise(res => res(Promise.all(array)))
    }()
}

let res = some([func1(), func2()])
res.then(console.log)
