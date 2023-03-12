// 1. Write a function that returns an anonymous function, which adds n to its input
// 1. adds1 = addsNum(1)
// adds1(3) ➞ 4
// adds1(5.7) ➞ 6.7

let addsNum = function (add) {
    return function (num){
        return num + add
    }
}
let adds1 = addsNum(3)
 console.log(adds1(1))
// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
//     add_ly = add_suffix("ly")
//
// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"
//
// add_less = add_suffix("less")
//
// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"
function add_suffix(suffix){
    return function (word){
        return word + suffix
    }
}
add_ly = add_suffix('ly')
console.log(add_ly('total'))


