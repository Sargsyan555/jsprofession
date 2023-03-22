class Person  {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    compareAge(person){
        if(this.age < person.age){
            return `${person.name} is older then me`
        }else if(this.age === person.age){
            return `${person.name} is the same age as me`
        }else{
            return `${person.name} is yonger then me`
        }
    }
}
p1 = new Person('Samvel', 24)
p2 = new Person('Jhon', 26)
p3 = new Person('Lily', 24)
console.log(p1.compareAge(p2));
 