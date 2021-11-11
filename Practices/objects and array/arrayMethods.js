let arr = [55, 66, 77, 88, 99];

arr.push(5); //add v konec
arr.unshift(10); //add v nacalo

arr.pop() //udalenie s konca
arr.shift() //udalenie s nacala;

arr.splice(1, 1) //nacinaya s kakoqo indexa udalit skolko elementov
arr.splice(1, 0, 11, 22, 33) //nacinaya s 1oqo indeksa udalit 0 elementov i dobavit 11,22,33
arr.splice(-1, 1) //nacinaya s konca 1oqo indeksa udalit 1 elementov i dobavit 11,22,33

arr = arr.concat(arr); // skleivanie massiva

var result = arr.slice(2, 5) //tipa substring s 2 indexa do 5 indexa otrezat kusok

result = arr.reverse() //razvernut massiv

result = arr.indexOf(77) //nayti index cisla
result = arr.lastIndexOf(77) //nayti index cisla s konca


result = arr.lastIndexOf(77) //nayti index cisla s konca
    //console.log(result);


///////////////////////////////////////////////////
// function evenNumber(item) {
//     return item % 2 == 0;
// }

// result = arr.filter(evenNumber);
// result.forEach(element => {
//     console.log(element);
// });

//toje samoe

// result = arr.filter(x => x % 2 == 0);
// result.forEach(element => {
//     console.log(element);
// });
///////////////////////////////////////////////////


// result = arr.filter(x => x > 1);

// for (let index = 0; index < result.length; index++) {
//     const element = result[index];
//     console.log(element);
// }


//result = arr.every(x => x > 50); //vse elementi proxodyat usloviya

//console.log(result);

// let age = prompt("suka"); //default znacenie
// console.log(age);
//alert("Hello")

// let number = parseInt('ff', 16);
// console.log(number);

// let number = parseInt('12ffseve85');
// console.log(number);

result = confirm('Yes or No');
console.log(result);