// Given an input string, reverse the string word by word, the first word will be the last, and so on.
//
// reverseWords(" the sky is blue") ➞ "blue is sky the"
// reverseWords("hello   world!  ") ➞ "world! hello"
// reverseWords("a good example") ➞ "example good a"
let sentense = " the sky is blue"
function reversWord(sentense) {
    let arr = sentense.split(' ')
    let filteredArr = arr[0] === '' ? arr.slice(1) : arr
      return filteredArr.reverse().join(' ')
}
console.log(reversWord(sentense))