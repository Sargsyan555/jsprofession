// function merjSort(arr){
//   // if(arr.length < 2){
//   //   return arr
//   // }
//   // let div = arr.length / 2
//   // let first = arr.slice(0, div)
//   // let sec = arr.slice(div)
  
//   // merjSort(first)
//   // merjSort(sec)
//   // return first, sec
//   function merj(){

//   }
// }
// console.log(merjSort([1, 8, 9, 7, 5, 6, 2]));
// function merj(left, right){
//   let len = left.left > right.length ? left.length : right.length
//   let newArr = []
//   for(let i = 0; i < len; i++){
//     if(left[i] < right[i]){
//       newArr.push(left[i])
//       left.shift()
//     }else{
//       newArr.push(right[i])
//       right.shift()
//     }
//   }
//   return merj(left, right)
// }
// console.log([1, 2, 5], [3, 7, 9])
// let promis = new Promise((resolve, rejected) => {
//   setTimeout(() => resolve('done'))
// })
// promis.then(
//   err => console.log(err),
//   res => console.log(res)
//   )
// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
//   .finally(() => console.log("Promise ready")) // triggers first
//   .then(result => console.log(result)); // <-- .then shows "value"











new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => console.log("Promise ready")) // triggers first
  .catch(err => console.log(err));  // <-- .catch shows the error