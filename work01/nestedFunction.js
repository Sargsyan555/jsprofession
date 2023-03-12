/*
Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

The returned array should consist of each of the elements from the first array multiplied by the integer.

    Examples
multiply([1, 2, 3])(2) ➞ [2, 4, 6]

multiply([4, 6, 5])(10) ➞ [40, 60, 50]

multiply([1, 2, 3])(0) ➞ [0, 0, 0]*/
function multiply(array) {
    return function (number){
        return array.map(item => item * number)
    }
}

console.log(multiply([1, 2, 3])(2))