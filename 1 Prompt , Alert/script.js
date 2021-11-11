// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!». 

// let name = prompt("Enter your name :");
// alert("Hello , " + name);



// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу. 

// let birthdayYear = +prompt("Enter your Birthday year : ");
// const nowYear = 2021;
// let result = nowYear - birthdayYear;

// if (result && result >= 0) alert("You age : " + result)
// else  alert("Wrong enter")



// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 

// let a = +prompt("Enter side of the square : ");
// let result = a * 4;
// alert("Square Perimetr = " + result);

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
//S = PI * R ^2

// let radius = +prompt("Enter radius of the circle : ");
// const pi = 3.14
// let result = pi * (radius * radius)
// alert("Circle square = " + result);


// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
//Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

// let km = +prompt("Enter km between City : ");
// let h = +prompt("How many hours does he want to get");
// let result = km / h;
// alert("You have to move with " + result + " / h")



// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе. 

// let usd = +prompt("Enter count your  USD : ");
// const usdToEur = 0.85;
// let result = usdToEur * usd;
// alert("You have " + result + " eur")



// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку. 

// let gb = +prompt("Enter count flesh memmory size : ");
// const file = 820;
// let resultConvertGbToMb = gb * 1024;
// let count = parseInt(resultConvertGbToMb / file);
// alert("You file Fit : " + count + " times")




// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. 
// Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется. 

// let money = +prompt("Enter count your money : ");
// let schocolate = +prompt("Enter schocolate cost : ");
// let count = parseInt(money / schocolate);
// let sdaca = money % schocolate
// alert("You can buy : " + count + " chokolate , and delivery of money " + sdaca + "$");



// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления). 

//let number = prompt("Enter num between 100-999 : ");

// 1 sposob
// if (number > 99 && number < 1000) {
//     alert(('' + number).split('').reverse().join('')); 
// } else {
//     alert("Wrong enter");
// }

// 2 sposob
// if (number > 99 && number < 1000) {
//     let hundred = parseInt(number / 100);
//     let ten = parseInt(number % 100 / 10)
//     let one = number % 100 % 10

//     let newNum = one * 100 + ten * 10 + hundred;
//     alert("You num => " + number + "\n Reverse => " + newNum);
// } else {
//     alert("Wrong enter");
// }


// 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. 
//В задании используйте логические операторы. В задании не надо использовать if или switch.

// let number = parseInt(prompt("Enter integer num "));

// function isEven(num) { return num % 2 == 0; }

// function check(num) { return (-1) ** num + 1 ? "true" : "false" }

// alert("Your number is even : " + (number % 2 == 0))
// alert("Your number is even : " + isEven(number));
// alert("Your number is even : " + check(number));