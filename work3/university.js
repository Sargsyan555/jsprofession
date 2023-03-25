
class University{
    constructor(){
        this.teachers = [],
        this.students = []       
    }
    addMembers(member, role){
        if(role === 'teacher'){
            this.teachers.push(member)
        }else if(role === 'student'){
            this.students.push(member)
        }
    }
    removeMember(member){
        if(role === 'teacher'){
            for(let i = 0; i < this.teachers.length; i++){
                if(this.teachers[i] === member){
                    delete this.teachers[i]
                }
            }        }
         else if(role === 'student'){  
            for(let i = 0; i < this.teachers.length; i++){
                if(this.teachers[i] === member){
                    delete this.students[i]
                }               
            }
        }
    }
}
class UniversityMembers{
    constructor(name, age, role){
        this.name = name,
        this.age = age,
        this.role = role,
        this.energy = 24
    }
    info(){
        return `Name is ${this.name}, Age is ${this.age}, Role is ${this.role}, Enegry ${this.energy}`
    }
}
class Teacher extends UniversityMembers{

}
class Student extends UniversityMembers{
    
}

