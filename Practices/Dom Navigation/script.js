// //Navigaciya 
// let cardBtns = document.querySelectorAll('.card button');
// for (const btn of cardBtns) {
//     btn.addEventListener('click', function() {
//         console.dir(event.target);
//         console.dir(event.target.parentElement)
//         console.dir(event.target.parentElement.previousElementSibling) //reyadom stoyawwiy u roditelya
//         event.target.parentElement.previousElementSibling.src = '../images.jpg';
//     })
// }

// /*
// parentElement           - Родительский элемент
// children                - Массив детей
// lastElementChild        - 1 первый элемент детей
// firstElementChild       - последний  элемент детей
// previousElementSibling  - Сосед родителя выше
// nextElementSibling      - Сосед родителя ниже
// */







// let textForm = document.querySelector('#textForm');
// textForm.addEventListener('submit', function() {
//     console.log(document.forms.myForm.text.value);
//     event.preventDefault(); //ne otrabatival
// })

// //pri izmineni fokusa
// document.forms.myForm.text.addEventListener('change', function() {
//     //console.log("ok");
// })


// //pri najatii po simvolno pravilno tak
// document.forms.myForm.text.addEventListener('input', function() {
//     //console.log("ok" + event.target.value);

// })

// document.forms.myForm.text.addEventListener('keyup', function() {
//     //console.log("ok");
// })

// document.forms.myForm.text.addEventListener('keydown', function() {
//     //console.log("ok");


//     if (event.key == 'a') {
//         //nelzya najat na a
//         event.preventDefault();
//     }
// })


// document.forms.myForm.text.addEventListener('keypress', function() {
//     console.log("ok");
// })









// let textForm = document.querySelector('#textForm');
// textForm.addEventListener('submit', function() {
//     //console.log(document.forms.myForm.text.value);
//     //event.preventDefault(); //ne otrabatival
// })

// //pri izmineni fokusa
// document.forms.myForm.text.addEventListener('change', function() {
//     //console.log("ok");
//     if (event.target.value.indexOf('@') > 0) {
//         event.target.classList.remove('invalid')
//         console.log('Okey');
//     } else {
//         event.target.classList.add('invalid')
//     }
// })


// //pri najatii po simvolno pravilno tak
// document.forms.myForm.text.addEventListener('input', function() {
//     //console.log("ok" + event.target.value);

// })











// let textForm = document.querySelector('#textForm');
// textForm.addEventListener('submit', function() {
//     //console.log(document.forms.myForm.text.value);
//     //event.preventDefault(); //ne otrabatival
// })



//////////////////////////////////////////////////
////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//BEST VARIANT
//pri najatii
document.forms.myForm.text.addEventListener('focus', function() {
    event.target.classList.remove('invalid')
})

//pri ubranie fokusa
document.forms.myForm.text.addEventListener('blur', function() {

    // if (!event.target.value.match('^[a-z]{1,}@[a-z]{1,}.[a-z]{2,}$')) {
    //     event.target.classList.add('invalid')
    // }
    let regex = /^[a-z]{1,}@[a-z]{1,}.[a-z]{2,}$/i;

    if (!event.target.value.match(regex)) {
        event.target.classList.add('invalid')
    }
})