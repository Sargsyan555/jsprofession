/*
Create a function that takes three collections of arguments and returns the sum of the product of numbers. Add the result of the first digit in each collection multiplied together to the result of the second digit in each collection multiplied together to get the final solution.
product(1,2)(1,1)(2,3) ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3

product(10,2)(5,0)(2,3) ➞ 100
// 10 * 5 * 2 + 2 * 0 * 3

product(1,2)(2,3)(3,4) ➞ 30
// 1 * 2 * 3 + 2 * 3 * 4*/
function product(...arguments){
    let initialValue = 0
    let res = arguments.reduce((acc, item )=> acc + item, initialValue)
    return function (...arguments){
         res += arguments.reduce((acc, item )=> acc + item, initialValue)
        return function (...arguments){
            return res += arguments.reduce((acc, item )=> acc + item, initialValue)
        }
    }
}

console.log(product(1, 3)(1, 5)(1,9))