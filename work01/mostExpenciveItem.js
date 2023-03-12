/*mostExpensiveItem({
    piano: 2000,
}) ➞ "piano"

mostExpensiveItem({
    tv: 30,
    skate: 20,
}) ➞ "tv"

mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
}) ➞ "stere*/
function mostExpensiveItem(obj){
    let max = 0
    let res = '1'
    for (let key in obj){
        if(max < obj[key]) {
            max = obj[key]
            res = key
        }
    }
    return res
}

console.log(mostExpensiveItem({a : 1, b : 2, c : 1}))