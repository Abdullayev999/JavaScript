// // Задание 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом. 
// // 1. Функция для вывода на экран информации об автомобиле. 
// // 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// // Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. 


// let car = {
//     manufacturer: "Germany",
//     model: "BMW",
//     year: 2020,
//     avgSpeed: 200,

//     info: function() {
//         console.log(`Manufacturer : ${this.manufacturer}, Model : ${this.model}, Year : ${this.year}, Average speed : ${this.avgSpeed}`);
//     },

//     countingTime: function(km, avgSpeed) {
//         let result = km / avgSpeed;
//         let addTime = parseInt(result / 4);
//         result += addTime;
//         return result;
//     }
// };


// car.info();

// let km = parseInt(prompt("Enter km : "))
// let avgSpeed = parseInt(prompt("Enter avg speed : "))
// console.log(car.countingTime(km, avgSpeed) + " h");

// console.log(car.countingTime(200, 20) + " h");





// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////


// // Задание 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом. 
// // 1. Функция сложения 2-х объектов-дробей. 
// // 2. Функция вычитания 2-х объектов-дробей. 
// // 3. Функция умножения 2-х объектов-дробей. 
// // 4. Функция деления 2-х объектов-дробей. 
// // 5. Функция сокращения объекта-дроби.

// //Решил создать отдельно объект для вычислений дробей а не повторять каждый раз функции

// let myFractionsCauting = {
//     addition: function(first, second) {
//         let znamenatel = first.denominator * second.denominator;
//         let cislitel = (znamenatel / first.denominator * first.numerator) + (znamenatel / second.denominator * second.numerator);

//         let answer = {};
//         answer.denominator = znamenatel;
//         answer.numerator = cislitel;

//         return this.reducing(answer);
//     },

//     subtracting: function(first, second) {
//         let znamenatel = first.denominator * second.denominator;
//         let cislitel = (znamenatel / first.denominator * first.numerator) - (znamenatel / second.denominator * second.numerator);

//         let answer = {};
//         answer.denominator = znamenatel;
//         answer.numerator = cislitel;

//         return this.reducing(answer);
//     },

//     multiplication: function(first, second) {
//         let znamenatel = first.denominator * second.denominator;
//         let cislitel = first.numerator * second.numerator;

//         let answer = {};
//         answer.denominator = znamenatel;
//         answer.numerator = cislitel;

//         return this.reducing(answer);
//     },

//     dividing: function(first, second) {
//         let znamenatel = first.denominator * second.numerator;
//         let cislitel = first.numerator * second.denominator;

//         let answer = {};
//         answer.denominator = znamenatel;
//         answer.numerator = cislitel;

//         return this.reducing(answer);
//     },

//     reducing: function(answer) {
//         let count = 100;
//         while (count != 0) {
//             if (answer.denominator % count == 0 && answer.numerator % count == 0) {
//                 answer.numerator /= count;
//                 answer.denominator /= count;
//             }
//             count--;
//         }
//         return answer;
//     }
// }


// let first = {
//     numerator: 3,
//     denominator: 9
// }

// let second = {
//     numerator: 9,
//     denominator: 3
// }

// console.log(myFractionsCauting.addition(first, second));
// console.log(myFractionsCauting.dividing(first, second));
// console.log(myFractionsCauting.multiplication(first, second));
// console.log(myFractionsCauting.subtracting(first, second));






// // Задание 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом. 
// // 1. Функция вывода времени на экран. 
// // 2. Функция изменения времени на переданное количество секунд. 
// // 3. Функция изменения времени на переданное количество минут. 
// // 4. Функция изменения времени на переданное количество часов. 

// let time = {
//     hour: 0,
//     minute: 0,
//     sec: 0,

//     print: function() {
//         console.log(this.hour + ":" + this.minute + ":" + this.sec)
//     },

//     addSec: function(sec) {
//         this.sec += sec;
//         this.timeEdit();
//     },

//     addMin: function(min) {
//         this.minute += min;
//         this.timeEdit();
//     },

//     addHour: function(hour) {
//         this.hour += hour;
//         this.timeEdit();
//     },

//     timeEdit: function() {
//         while (this.sec > 59) {
//             this.sec -= 60;
//             this.minute++;
//         }

//         while (this.minute > 59) {
//             this.minute -= 60;
//             this.hour++;
//         }

//         while (this.hour > 23) {
//             this.hour -= 24;
//         }
//     },
// }

// let hour = parseInt(prompt("Enter add hour : "));
// time.addHour(hour);

// let min = parseInt(prompt("Enter add min : "));
// time.addMin(min);

// let sec = parseInt(prompt("Enter add sec : "));
// time.addSec(sec);
// time.print();






// // Задание 4. Создать массив «Список покупок». 
// // Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
// //Написать несколько функций для работы с таким массивом. 
// // 1. Вывод всего списка на экран таким образом, чтобы сначала шли не купленные продукты, а потом – купленные. 
// // 2. Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// //необходимо увеличивать количество в существующей покупке, а не добавлять новую. 
// // 3. Покупка продукта. Функция принимает название продукта и отмечает его как купленный.



// function createProduct(name, quantity = 1, isHave = true) {
//     let product = {};
//     product.name = name;
//     product.quantity = quantity;
//     product.isHave = isHave;

//     product.Print = function() {
//         console.log(`${this.name}\t${this.quantity}\t${this.isHave}`);
//     }

//     return product;
// }




// function ListOfProducts(product1, product2, product3) {
//     let arr = [product1, product2, product3];
//     this.PrintAll = function() {
//             this.Sort();
//             for (let i = 0; i < arr.length; i++) {
//                 arr[i].Print();
//             }
//         },

//         this.Sort = function() {
//             for (let i = 0; i < arr.length - 1; i++) {
//                 for (let j = i + 1; j < arr.length; j++) {
//                     if (arr[i].quantity < arr[j].quantity) {
//                         let tmp = arr[i];
//                         arr[i] = arr[j];
//                         arr[j] = tmp;
//                     }
//                 }
//             }
//         },

//         this.Add = function(product) {
//             for (let index = 0; index < arr.length; index++) {
//                 if (arr[index].name == product.name) {
//                     arr[index].quantity += product.quantity;

//                     if (arr[index].quantity > 0) {
//                         arr[index].isHave = true;
//                     }
//                     return;
//                 }
//             }
//             arr.push(product);
//         }

//     this.Purchased = function(product) {
//         for (let index = 0; index < arr.length; index++) {
//             if (arr[index].name == product.name) {
//                 if (arr[index].quantity >= product.quantity) {
//                     arr[index].quantity -= product.quantity;
//                     if (arr[index].quantity == 0) {
//                         arr[index].isHave = false;
//                     }
//                 } else {
//                     return "Не достаточно товара";
//                 }
//                 return "Товар успешно добавлен";
//             }
//         }

//         return "Данный товар отсутсвует";
//     }
// }


// let product1 = new createProduct("Car", 5);
// let product2 = new createProduct("Phone", 10);
// let product3 = new createProduct("Table", 3);
// let list = new ListOfProducts(product1, product2, product3);

// list.Add(new createProduct('TV', 5));
// list.Add(new createProduct('Car', 3));

// list.PrintAll();

// list.Purchased(new createProduct('Phone', 3))
// console.log("\n");

// list.PrintAll();