// Create a function named myInterval, which takes two parameters, a callback function
// and an interval duration(milliseconds). After calling the myInterval function, the
// callback function must be executed every given interval duration
// let myInterval = function(cb, dalay = 100){
//   cb = function(){
//     return setInterval(() =>  dalay, dalay)
//   }
//   return cb()
// }
//console.log(myInterval());
// function myFunction(param){
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if(typeof param === 'string'){
//         res(param.toUpperCase())
//       }else{
//         rej(param)
//       }
//     } , 500)
//   }).then(res => console.log(res)).catch(rej => console.log(rej))
// //սենց գրելուց ճիշտա աշխատում բայց երբ return եմ անում pending է տալիս ?
// //.then(res => res).catch(rej => rej)
// }
// myFunction(123)
// Task 2
// Create a function that takes in a single parameter and returns a new promise. Using
// setTimeout, after 500 milliseconds, the promise will either resolve or reject some value. If
// the parameter of the function is a string, the promise resolves with that same string
// uppercased. If the  parameter of the function is anything but a string, it rejects with that same
// value.





// const some_function = (param) => {

//     return new Promise((resolve, reject) => {
//         if (typeof(param) === 'string') {
//             setTimeout(() => {
//             resolve(param.toUpperCase());
//             },100)
//           } else {
//             reject(param);
//           }
//         })
//   };
//   console.log(some_function('str'));


// Task 3
// Create a function named mapPromise that can take in a promise and a transformer
// function and return a new transformed promise that follows these rules:
// ● If the first promise rejects with an error, the new promise rejects with that error.
// ● If the first promise resolves with a result, it calls the transformer with the value as an
// argument.
// ○ If the transformer returns with a value, the new promise resolves with that
// value.
// ○ If the transformer throws an error, the new promise rejects with that error.
// Example:
const myPromise = new Promise((resolve, reject) => { resolve(2) })
// const timesTwo = (val) => val * 2
// function mapPromise(myPromise, timesTwo){
//   console.log(myPromise.then((res) => res));
// }
let res = myPromise.finally(function(result) {
  return result;
});
console.log(res);
// mapPromise(myPromise, timesTwo)