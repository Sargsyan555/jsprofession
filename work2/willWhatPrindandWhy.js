/*
const obj = {
    age: 24,
    foo: function () {
        let self = this;//ստեղծված է փոփոխական ու վերագրած է this, որը obj  ն է կանչման պահին, քանի որ this ը որոշվում է մոթոդի կանչման պահին
        ((num) => {
            this.age = num// this կոնկրետ object ն է, age will have value of 17
        })(17); //obj.age changed to 17
        console.log(this.age);//17
    }
}
obj.foo()//17
*/
// second/
/*
const obj = {
    a: 777,
    foo
}
foo()//the function on line 18, քանի որ strict mood ում  չի ֆունկցիան, this reference to the window և window.a is undefined
function foo() {
    console.log(this.a)
}
obj.foo()// this ը obj-ն է և obj.a === 777
*/
/*
const obj = {
    age: 22,
    showAge() {
        console.log(this.age)//22, this === obj, this.age === 22
        const arrowAge = () => {
            console.log(this.age) //22, սա կախված է նրանից որ arrow function ները չունե իրնց սեփական this ը և  this օբյեկտն է որի մեջ ինքն է ՞՞ թէ մետոդի մեջ միշտ this ը նունն է
        }
        arrowAge()//22, 32 տող
    },
    showArrowAge: () => {
        console.log(this.age)//undefined,   //??? ինչի error չի, եթե arrow function ը չունի իր this ը ինչի է սռեղ this ը օբյեկտ

    }
}
obj.showAge()//22 , after 22
obj.showArrowAge()//undefined
*/
//7) Ինչ կտպվի ծրագրի աշխատանքից հետո, բացատրեք ինչու

const foo = function () {
    this.x = 5;//foo() =>in window x = 5
    (function () {
        this.x = 3;//here this.x = 3 in window// ինչի ստեղ չի փոխվում բայց մետոդի մեջ օգտագործելու ժամանակ արժեքը
        // փոխվում է միանգամից ֆունկցիայի դեպքում , դրա պատճառը հնարավորա էնա, որ օբյեկտի մեջի մեթոդի մեջ
        // քանի հատ nested ֆունկցիա էլ որ լիի վերցնելու է միշտ նույն this ը այսինքն էն օբյեկտը որի վրայից որ ինաքը կանչվել է
    })();
    console.log(this.x);//3 // new foo() ???
};
const obj = {
    x: 4,
    logger: function () {
        This = {}// պետք չի
        console.log(this.x);// 4 this === obj and obj.x === 4
    }
};
foo();//3,undeifind
new foo();// էստեղ րա համար է 5 տպում որովհետեև ներսի ֆունկցիան ունի իր սեփական this ը ու էտ քանի որ ոչ մի բանի վրայից կանչաց չի
// հղում է անում window ին ու չի փոխում ստեղծվող օբյեկտի x ը
obj.logger();//4
new obj.logger();// logger {} էս լավ չհասկացա

