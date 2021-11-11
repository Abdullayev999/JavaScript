class Person {
    test = 'test'; //public pole i te cto v konstruktore
    _protected = 1;
    constructor(name, surname, age) {
        this.name = name;
        this.age = age;
        this.surname = surname;
    }

    get fullname() {
        return `${this.name} ${this.surname}`;
    }

    set fullname(value) {
        this.name = value.split(' ')[0];
        this.surname = value.split(' ')[1];
    }

    static test() {
        console.log("TEST");
    }

    static createEmptyPerson() {
        return new Person('Empty', 'Empty', 0);
    }

    showInfo() {
        console.log(`${this.name} | ${this.age} | ${this.surname}`);
    }
}

class Student extends Person {

    constructor(name, surname, age, group) {
        super(name, surname, age);
        this.group = group;
    }


    showInfo() {
        super.showInfo();
        console.log(`${this.group}`);
    }


    // get age() {
    //     return this.age;
    // }

    // set age(value) {
    //     this.age = value;
    // }
}

// // let student = new Student('Farid', 'Abdullayev', 25, 'FSDM_1812');
// let person = new Person('Farid', 'Abdullayev', 25);
// // person.fullname = 'Cavid Qurbanov';
// // console.log(person.fullname);

// // Person.test();
// // Student.test();


// Person.test = function() {
//     console.log("PEREOPREDELIL");
// }


// // Person.test();
// // Student.test();

// // console.log(Student.createEmptyPerson().showInfo());

// // Student.createEmptyPerson().showInfo();

// function hello() {
//     console.log(this.name);
// }

// hello.call(person);

/////////////////////////////////////////////
let student = new Student('Farid', 'Abdullayev', 25, 'FSDM_1812');
let person = new Person('Farid', 'Abdullayev', 25);

console.log(person._protected);

console.log(student instanceof Person);
console.log(person instanceof Person);
console.log(person instanceof Student);