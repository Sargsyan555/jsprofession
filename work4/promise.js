//Task 1
// Create a function named myInterval, which takes two parameters, a callback function
// and an interval duration(milliseconds). After calling the myInterval function, the
// callback function must be executed every given interval duration
let myInterval = function(cb, dalay = 100){
  setTimeout(() => {
    cb()
    myInterval(cb, dalay)
  }, dalay)
}
console.log(myInterval(() => console.log('something'), 1500));
// Task 2
// Create a function that takes in a single parameter and returns a new promise. Using
// setTimeout, after 500 milliseconds, the promise will either resolve or reject some value. If
// the parameter of the function is a string, the promise resolves with that same string
// uppercased. If the  parameter of the function is anything but a string, it rejects with that same
// value.
function myFunction(param){
  return new Promise((res, rej)=>{
    setTimeout(() => {
      if(typeof param === 'string'){
          res(param.toUpperCase())
      }else{
        rej(param)
      }
    }, 500)
  })
}
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
function mapPromise(newPromise, transPromise) {
  return newPromise.then((res) => transPromise(res)).catch((err) => err);
}
const myPromise = new Promise((resolve, reject) => resolve(2));
const timesTwo = (val) => val * 2;
mapPromise(myPromise, timesTwo)
  .then(console.log)
  .catch(console.log);