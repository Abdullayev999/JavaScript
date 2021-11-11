// function test() {
//     console.log('TEST'); 
// }
// setTimeout(test, 1000);



// setTimeout(function() {
//     console.log('HELLO'); 
// }, 1000);



// setTimeout(() => console.log('HELLO'), 1000);



// let counter = 0;
// let intervalId = setInterval(function() {
//     console.log(counter++); 
// }, 1000);
// console.log(`ID: ${intervalId}`);
// setTimeout(() => clearInterval(intervalId), 4000);



// let counter = 0;
// let intervalId = setInterval(() => {
//     console.log(counter++);
//     if (counter > 5) {
//         clearInterval(intervalId);
//         //return;  nelzya delat return on ne ostanavlivaet nado delaet clera 
//     }
// }, 1000);