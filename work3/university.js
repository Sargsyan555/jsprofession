
class University{
    constructor(){
        this.teachers = [],
        this.students = []       
    }
    addMembers(member){

    }
    removeMember(member){

    }
    startLesson(){
    

    }
}
class UniversityMembers{
    info(){
        return `Name is ${this.name}, Age is ${this.age}, Role is ${this.role}, Enegry ${this.energy}`
    }
}
class Teacher extends UniversityMembers{
    constructor(name, age, energy){
        this.name = name,
        this.age = age,
        this.role = 'teacher',
        this.energy = energy
    }
}
class Student extends UniversityMembers{
    constructor(name, age, energy){
        this.name = name,
        this.age = age,
        this.role = 'student',
        this.energy = energy
    }
}