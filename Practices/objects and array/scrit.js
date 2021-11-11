// function hello() {
//     console.log("Hello")
// }

// obj.IsAdmin = true;
// delete obj.IsAdmin;
// obj['salam'] = "Azeri";
// console.log(obj.Name + " " + obj.age + " " + obj.IsAdmin + " " + obj.pet.Name);
// let func = hello
// func();


//let Name = "Cavid";


let obj = {
    Name: "Farid",
    age: 25,
    pet: {
        Name: "Rex"
    },
    //  say: hello
    say: function() {
        //obj = 5;
        console.log(this.Name)
    },

    info: function() {
        console.log(`Name: ${this.age}\nAge : ${this.age} 🌏`);
        //console.log("Name: " + this.Name + " Age : " + this.age);
    }
};

obj.say();
console.log(obj.Name);
//obj.info();