// Create a function that groups an array of numbers based on a size parameter. The size represents the maximum length of each sub-array.
// group([1, 2, 3, 4], 2) ➞ [[1, 2], [3, 4]]
// group([1, 2, 3, 4, 5, 6, 7], 4) ➞ [[1, 2, 3, 4], [5, 6, 7]]
// group([1, 2, 3, 4, 5], 1) ➞ [[1], [2], [3], [4], [5]]
let arr = 5
function group(array, number) {
    let newArr = []
    let k = 0
    for (let i = number; i <= array.length; i += number){
       newArr.push(array.slice(k, i))
        k += number
    }
    return newArr
}

console.log(group([1,2,3,4], 2))