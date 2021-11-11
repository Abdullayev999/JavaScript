// // let obj = {
// //     name: 'Farid'
// // };

// // obj = [];
// // alert(obj)
// // console.log(obj);

// /////////////////////////////

// let person = {
//     name: 'Farid',
//     age: 25,

//     swhoInfo: function () {
//         console.log(`${this.name} | ${this.age}`);
//     }
// };


// //console.log(person.__proto__.toString());

// let student = {
//     group: "FSDE_1812",
//     //,__proto__:person
//     swhoInfo: function () {
//         // console.log(`${this.name} | ${this.age} | ${this.group}`);
//         this.__proto__.swhoInfo();
//         console.log(this.group);
//     }
// }

// student.__proto__ = person;

// //console.log(student);
// student.swhoInfo();

// //////////////////////////////////////////////////////////////////


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// let person = new Person("Farid", 25);
// let person2 = { name: 'Farid', age: 25 };
// console.log(person);
// console.log(person2);
// console.log(person.constructor);
// console.log(person2.constructor);

// //////////////////////////////////////////////////////////////////


// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }


// let obj = {};
// //Ot ceqo imeni vizivaetsa
// console.log(Person.call(obj, 'Farid', 25));
// obj.__proto__.constructor = Person;
// console.log(obj);

// //////////////////////////////////////////////////////////////////


// function Person(name , age ) {
//     this.name = name;
//     this.age = age;

//     this.showInfo = function() {
//         console.log(`${this.name} | ${this.age}`);
//     }
// }


// function Student(group) {
//     this.group = group;
// }

// Student.prototype = Person;

// let student = new Student('FSDE_1812');

// console.log(student.name);


// //////////////////////////////////////////////////////////////////

// let personProto = {
//     showInfo: function() {
//         console.log(`${this.name} | ${this.age}`);
//     }
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype = personProto;

// function Student(group) {
//     this.group = group;
// }
// Student.prototype = personProto;

// let student = new Student("FSDM_1812")

// let person = new Person("Farid", 25);
// person.showInfo();




// //////////////////////////////////////////////////////////////////

// let personProto = {
//     showInfo: function() {
//         console.log(`${this.name} | ${this.age}`);
//     }
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype = personProto;

// function Student(name, age, group) {
//     this.name = name;
//     this.age = age;
//     this.group = group;
// }
// Student.prototype = Person.prototype;

// let student = new Student("Farid", 25, "FSDM_1812")
// student.showInfo();
// console.log(student);

// let person = new Person("Farid", 25);
// //person.showInfo();


//////////////////////////////////////////////////////////////////

// let personProto = {
//     showInfo: function() {
//         console.log(`${this.name} | ${this.age}`);
//     }
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype = personProto;

// function Student(name, age, group) {
//     Person.call(this, name, age);
//     this.group = group;
// }
// Student.prototype = Person.prototype;

// let student = new Student("Farid", 25, "FSDM_1812")
// student.showInfo();
// console.log(student);

// let person = new Person("Farid", 25);
// //person.showInfo();


/////////////////////////////////////////////////////////



///////////////////////VAJNO!!!!!!!!!!!!!!!!!!!!11111111
//...params peredavat cto uqodno v constr
class Person {
    //mojno ne pisat esli est v construktore
    //name;
    //age;
    _test = 'test';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo() {
        console.log(`${this.name} | ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, group) {
        super(name, age);
        this.group = group;
    }

    showInfo() {
        super.showInfo();
        console.log(` | ${this.group}`);
    }
}

// let person = new Person('Farid', 25);
// console.log(person);
let student = new Student('Farid', 25, 'FSDM_1812');
console.log(student);
student.showInfo();