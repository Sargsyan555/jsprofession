// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
// countAll("Hello World") ➞ { "LETTERS":  10, "DIGITS": 0 }
//
// countAll("H3ll0 Wor1d") ➞ { "LETTERS":  7, "DIGITS": 3 }
//
// countAll("149990") ➞ { "LETTERS": 0, "DIGITS": 6 }
function countAll(sentense){
    let arr = sentense.split('')
    let lettersCount = (arr.filter(char => /[a-zA-Z]/.test(char))).length
    let numbersCount = (arr.filter(char => char === '0'|| Number(char))).length
    return { "LETTERS":  lettersCount, "DIGITS": numbersCount }
}

console.log(countAll("H3ll0 Wor1d"))