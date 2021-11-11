// //console.log(typeof([] + {})); // string

// // foo1();
// // foo2();


// //Function declaration
// function foo1() {
//     console.log('foo1');
// }


// //Function expression 
// let foo2 = function() {
//     console.log('foo2');
// }




////////////////////////////////////////////

// let obj = {
//     name: 'Farid',
//     age: 25,

//     printInfo: function() {
//         // setTimeout(function()  {//undifaned
//         //     console.log(`${this.name} ${this.age}`);
//         // }, 1000);
//         setTimeout(() => {
//             console.log(`${this.name} ${this.age}`);
//         }, 1000);
//     }

//     // printInfo: () => {//UNDEFINED
//     //     console.log(`${this.name} ${this.age}`);
//     // }
// }



// obj.printInfo();





// /////////////////////////////////////////////////////////////////////

// function printInfo() {
//     console.log(`${this.name} ${this.age}`);
// }

// let obj = {
//     name: 'Farid',
//     age: 25,
//     print: printInfo
// }

// printInfo();
// obj.print();
// printInfo.call(obj);


/////////////////////////////////////////////////////////////////////

// function printInfo() {
//     console.log(`${this.name} ${this.age}`);
// }

// let obj1 = {
//     name: 'Farid',
//     age: 25,
// }

// let obj2 = {
//     name: 'Cavid',
//     age: 28,
// }


// //call apply bind
// printInfo.call(obj1);
// printInfo.call(obj2); 

// /////////////////////////////////////////////////////////////////////

// function printInfo(name, age) {
//     console.log(`${name} ${age}`);
// }

// let obj1 = {
//     name: 'Farid',
//     age: 25,
// }

// let obj2 = {
//     name: 'Cavid',
//     age: 28,
// }


// //call apply bind
// printInfo.call(obj1, 'Abdullayev', 25);
// printInfo.call(obj2, 'Cavidov', 28);


// //call apply bind
// printInfo.apply(obj1, ['Abdullayev', 25]);
// printInfo.apply(obj2, ['Cavidov', 28]);


// //call apply bind
// let farid = printInfo.bind(obj1);
// let cavid = printInfo.bind(obj2);


// farid('Farid', 25);
// cavid('Cavid', 28);





///////////////////////////////////////////////////////////////////////

// let name = 'Cavid';

// function test() {

//     let name = 'Farid';

//     function printName() {
//         let age = 25;
//         console.log(`${name} ${age}`);
//     }
// }


// function printName() {
//     let age = 25;
//     console.log(`${name} ${age}`);
// }


// //printName.[[Enviroment]] = {age:25 ,next:{'Farud',printName:funnction(){..}}
// printName();
// test().printName;





// ///////////////////////////////////////////////////////////////////////
// let count = 0;

// function getCounter() { 
//     return function() {
//         return count++;
//     }
// }

// let counter = getCounter(); //counter.[[Enviroment]] = { next : {count:0 , next: winddow}}
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let counter2 = getCounter(); //counter.[[Enviroment]] = { next : {count:0 , next: winddow}}
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());






///////////////////////////////////////////////////////////////////////



// function getCounter() {
//     let count = 0; //ne unictojetsa poka est ssilka
//     let test = 'test'; //srazu udalitsa posle vizova getCounter
//     return function() {
//         return count++;
//     }
// }

// let counter = getCounter(); //counter.[[Enviroment]] = { next : {count:0 , next: winddow}}
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let counter2 = getCounter(); //counter.[[Enviroment]] = { next : {count:0 , next: winddow}}
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());



// ///////////////////////////////////////////////////////////////////////


// {
//     var x = 5;
// }

// console.log(x);





///////////////////////////////////////////////////////////////////////


//var text = 'hello';

//hello();




///////////////////////////////////////////////////////////////////////


// const obj = {
//     name: 'Farid',
//     age: 25
// }

// obj.age = 30;
// console.log(obj);
// //MOJNO MENYAT POLYA NO NE SSILKU


// ///////////////////////////////////////////////////////////////////////


// const obj = {
//     name: 'Farid',
//     age: 25
// }

// Object.freeze(obj);//zamorozka obyekta

// obj.age = 30;
// // console.log(obj);

// ///////////////////////////////////////////////////////////////////////


// const obj = {
//     name: 'Farid',
//     age: 25,
//     date: {
//         day: 10,
//         month: 2
//     }
// }

// Object.freeze(obj); //zamorozka obyekta // a pod obyet mojno menyat

// obj.age = 30;
// obj.date.day = 30; 
// console.log(obj);



/////////////////////////////////////////////////////////////////////// 

// const obj = {
//     name: 'Farid',
//     age: 25,
//     date: {
//         day: 10,
//         month: 2
//     }
// }

// Object.seal(obj); 
// //NELZYA NICEGO DOBOVLYAT no izmenenie budet rabotat

// obj.age = 30;
// obj.date.day = 30; 
// // console.log(obj);


// ///////////////////////////////////////////////////////////////////////
// //ENUM NUJNO ZAMORAJIVAT

// const Priority = {
//     LOW: 0,
//     MEDIUM: 2,
//     HIGH: 3
// }

// Object.freeze(Priority);
// console.log(Priority.MEDIUM);


///////////////////////////////////////////////////////////////////////


// let test = {
//     x: 10
// };

// const obj = {
//     name: 'Farid',
//     age: 25,
//     date: {
//         day: 10,
//         month: 2
//     }
// }

// obj.__proto__ = test;
// // nasledovanie odnoi toje
// Object.setPrototypeOf(obj, test);

// for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {//tolko sobstvennie polya
//         console.log(key + ' ' + obj[key]);
//     }
// }

// console.log(JSON.stringify(obj));


///////////////////////////////////////////////////////////////////////


// let items = [
//     { title: 'Tea', price: 8, discount: 10 },
//     { title: 'Coffe', price: 17, discount: 20 },
//     { title: 'Cola', price: 14, discount: 15 },
//     { title: 'Water', price: 3, discount: 12 },
//     { title: 'Milk', price: 31, discount: 8 },
// ]

// //all item > 6
// let result = items.filter(i => i.price > 6);

// //apply discounts
// result = result.map(i => i.price - i.price / 100 * i.discount);

// //sum
// let sum = 0;
// result.forEach(i => {
//     sum += i;
// })

// console.log(result);
// console.log(sum);

// /////////////////////////////////////////////

// //all item > 6
// //apply discounts
// //sum
// sum = 0;
// result = items.filter(i => i.price > 6).map(i => i.price - i.price / 100 * i.discount);
// result.forEach(i => {
//         //  sum += i;
//     })
//     //ODNO I TOJE
// sum = result.reduce((res, x) => res += x, 0)
//     //RES-  rezultat , x - item, 0 eto iznacalnoe znacenie
// console.log(result);
// console.log(sum);

// //ODNO I TOJE

// //all item > 6
// //apply discounts
// //sum
// let res = items
//     .filter(x => x.price > 6)
//     .map(i => i.price - i.price / 100 * i.discount)
//     .reduce((res, x) => res += x, 0);

// console.log(res);

// //MAX
// let max = items.reduce((result, x) => x.price > result ? result = x.price : result, 0);
// console.log(max);

// //SORT
// items.sort((x, y) => x.price - y.price);
// console.log(items);


// function comparePrice(a, b) { // + 0 -
//     return a.price - b.price;
// }




///////////////////////////////////////////////////////////////////////


let numbers = [11, 8, 20, 15, 6, 7, 1];

numbers.sort(); // p odefault sortiruet kak tekst
numbers.sort((x, y) => x - y);
console.log(numbers);