
//Task 1
//Write a recursive function to determine whether all digits of the number are odd or not.
// function areAllEvenNumbers(number){
//     let num = number % 10
//    if(num % 2){
//         return false
//    }else if(number < 10 && !(number % 2)){
//         return true
//    }else{
//     let currentNumber = Math.floor(number / 10)
//     return areAllEvenNumbers(currentNumber)
//    }
//  }
// console.log(areAllEvenNumbers(1248));

//Task 2
//Given an array of numbers. Write a recursive function to find its minimal positive 
//element. (if such element does not exist, return -1)
//
// function findMinimalPositive(arr){
//     let len = arr.length
//     if(arr.length === 1){
//         return arr[0]
//     }else{
//         if(arr[len - 2 < 0]){
//             arr[len - 2] = arr[len - 1]
//             arr.pop()
//             return findMinimalPositive(arr)
//         }else if(arr[len - 1] < 0 || arr[len - 1] > arr[len - 2]){
//             arr.pop()
//             return findMinimalPositive(arr)
//         }else{
//             arr[len - 2] = arr[len - 1]
//             arr.pop()
//             return findMinimalPositive(arr)
//         }
//     }
// }
// console.log(findMinimalPositive([5, -9, 2, 11, -1, 10]));

//Task 3
// Given an array of numbers which is almost sorted in ascending order.  Find the index 
//where sorting order is violated.

// function violatedSortingOrder(arr){
//     let first = arr.lastIndexOf('ok') + 1
//     if(arr[first] > arr[first + 1]){
//         return first
//     }else if(arr[arr.length - 2] === 'ok'){
//         return -1
//     }else{
//         arr[first] = 'ok'
//         return violatedSortingOrder(arr)
//     }
// }
// console.log(violatedSortingOrder([1, 2, 3, 4, -1]));

//Task 4
// Given an array. Write a recursive function that removes the first element and returns the 
// given array. (without using ​arr.shift()​)
function removeFirstElement(arr){
    if(arr.length < 2){
        return arr
    }else{
        arr.pop()
         return arr.push(removeFirstElement(arr))
    }
}
console.log(removeFirstElement([1, 2, 3, 4]));

//Task 5
// function fakeFlat(arr){
//     let filtereedArray = arr.filter((item) => Array.isArray(item))
//     if(filtereedArray.length === 0){
//         return arr
//     }else{
//         for(let i = 0; i < arr.length; i++){
//             if(Array.isArray(arr[i])){
//                 let left = arr.slice(0, i)
//                 let right = arr.slice(i + 1)
//                 let res = left.concat(...arr[i]).concat(right)
//                 return fakeFlat(res)
//             }
//         }
//     }
// }
// console.log(fakeFlat([14, [1, [[[3, []]], 1], 0] ]));
//Task 7
// Given a number. Write a function that calculates its sum of the digits and if that sum has 
// more than 1 digit find the sum of digits of that number. Repeat that process if needed 
// and return the result
// function sumDights(number){
//     if(number < 10){
//         return number
//     }else{
//         let res = ('' + number).split('').reduce((acc, item) => {
//             return acc += +item 
//         }, 0)
//         return sumDights(res)
//     }
// }

// console.log(sumDights(999999));
//Merg Sort
// function mergSort(data1, data2){
//     let result = []  // j->2 i-> 4
//     let i = 0 //data1
//     let j = 0 // data2
//     while(i < data1.length  && j < data2.length){
//         if(data1[i] < data2[j]){
//             result.push(data1[i])
//             i++
//         }else{
//             result.push(data2[j])
//             j++
//         }
//     }
//     if(i < data1.length ){
//         let sliced = data1.slice(i)
//         result.push(...sliced)

//     }
//     if(j < data2.length ){
//         let sliced = data2.slice(j)
//         result.push(...sliced)
//     }
//     return result
// }
// function divied(data){
//     if(data.length < 2){
//         return data
//     }else{
//         let len =  Math.floor(data.length / 2)
//         let arr1 = divied(data.slice(0, len))
//         let arr2 = divied(data.slice(len))
//         return mergSort(arr1, arr2)
//     }
// }
// console.log(divied([8, 5, 7, 9, 6, 3]));
