/*2) գրեք Calculator constructor, որը կունենա add, subtract, multiply ու divide մեթոդները։ Օրինակ՝
function Calculator() {
   // ձեր կոդը
}
const calculator = new Calculator()
//
// calculator.add(10, 5) => 15
*/
function Calculator(){
    this.add  =function (numberOne, numberSecond){
        return numberOne + numberSecond
    }
    this.subttract = function (numberOne, numberSecond){
        return numberOne - numberSecond
    }
    this.multiplay = function (numberOne, numberSecond){
        return numberOne * numberSecond
    }
    this.divide = function (numberOne, numberSecond){
        return numberOne / numberSecond
    }
}
const calculator = new Calculator()
console.log(calculator.add(1, 5))
let user = {};

