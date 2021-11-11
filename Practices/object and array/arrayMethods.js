let arr = [11, 22, 33, 44, 55, 66, 77, 88];
let arr2 = [101, 202, 303];
arr.push(99); //dobavka v konec
arr.unshift(0); //dobavka v nacalo

arr.pop(); //udalit s konca
arr.shift(); //udalit s nacalo


//arr.splice(1, 1); //udalit s 1oqo indexsa 1 element
//arr.splice(-1, 1); //udalit s konca 1oqo indexsa 1 element

//arr.splice(1, 0, 100, 1101)
//arr.splice(NACINAYA S KAKOQO INDEXSA, UDALIT STOLKO ELEMENTOV,DOBAVKA INDEXI)

//arr.splice(0, 0, 100, 101)


//arr = arr.concat(arr2);//concatanaciya array return new arr
//let result = arr.slice(1, 4); //nacinaya s 1oqo indexsa vozmi do 4indexa verni


//let result = arr.reverse();//razvernut


//1oe vxojdenie
//let result = arr.indexOf(55); //find index element
//let result = arr.lastIndexOf(55); //find index element s konca



//Sort cetnie cisla
// function evenNumber(num) {
//     return num % 2 == 0
// }

// let result = arr.filter(evenNumber)


//TOJE SAMOE
// let result = arr.filter(num => num % 2 == 0);
// console.log(result);


//Check vse podxodyat
// let result = arr.every(num => num % 2 == 0); 
// console.log(result);


// alert("Welcome");
// let age = parseInt(prompt("Enter your name : ", 0))
// if (age >= 18) {
//     console.log("Welcome");
// } else {
//     console.log("ne soverwinoletniy");
// }

// let azn = parseInt(prompt('AZN', 0));
// let USD = parseFloat(prompt('USD to AZN', 0));
// console.log(azn / USD);


// let number = parseInt('ff', 16);
// console.log(number);

let answer = confirm("Yes or No?")
console.log(answer);