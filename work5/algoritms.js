/*
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
*/
function addUp(number){
    if(number < 2){
        return number
    }
    return number + addUp(number - 1)
}

console.log(addUp(4));
/*
A value is omnipresent if it exists in every subarray inside the main array.
To illustrate:

[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.

Create a function that determines whether an input value is omnipresent for a given array.

Examples
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false
*/
function isOmnipresent(arr, num){
    let res = true
    for(let i = 1; i < arr.length; i++){
        if(!arr[i].includes(num)){
            res = false
            break
        }
    }
    return res 
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 2));
//binar algoritm 
// function binarFoo(arr){
//     let condition = true
//     while(condition){
//         condition = false
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] > arr[i + 1]){
//                 let item = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = item
//                 condition = true
//             }
//         }
//     }
//     return arr
// }
// console.log(binarFoo(arr));
//selection sort
// const arr = [1, 5, 2, 3, 4, -1, -5555]

// function selectionSort(arr){
//     let start = 0
//     let memory = 0

//     let condition = true
//     while(condition){
//         condition = false
//         memory = start
//         for(let i = start + 1; i < arr.length; i++){
//             if(arr[memory] > arr[i]){
//                 condition = true
//                 memory = i
//             }
//         }
//         if(condition === true){
//           let item = arr[memory]
//         arr[memory] = arr[start]
//         arr[start] = item
//         console.log(arr);
//         start++
//         }
        
//     }
//     return arr
// }
// console.log(selectionSort(arr));
// const arr = [2, 5, 1, 3,15, 4]
// function selectionSort(arr){
//         for(let i = 1; i < arr.length; i++){
//             let bool = false
//            let memory = arr[i]
//            console.log(memory);
//            let comparedElement = i
//             while(arr[comparedElement - 1] > arr[comparedElement]  ){

//                 arr[comparedElement + 1] = arr[comparedElement]
//                 console.log(arr);

//                 if(comparedElement === 0) break
//                 comparedElement--
//                 bool = true
//             }
//             if(bool) arr[comparedElement] = memory
//             console.log(arr);
//         }
      
//     return arr
// }
// console.log(selectionSort(arr));
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














