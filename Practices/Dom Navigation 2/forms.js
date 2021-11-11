// let subBtn = document.querySelector('#submit');
// subBtn.addEventListener('click', function() {
//     console.log('test');
//     //event.preventDefault();
// });



// let form = document.querySelector('#textForm');
// form.addEventListener('submit', function() {
//     console.log('test');
//     // event.preventDefault();
// });


// let form = document.querySelector('#textForm');
// form.addEventListener('submit', function() {
//     console.log(document.forms.myForm.text.value);
//     event.preventDefault();
// });

// document.forms.myForm.text.addEventListener('change', function() {
//     console.log("change");
// })

// document.forms.myForm.text.addEventListener('input', function() {
//     console.log("input");
// })


// //proverka srazu
// document.forms.myForm.text.addEventListener('keyup', function() {
//     console.log("keyup " + event.key);
// })

// //proverka srazu
// document.forms.myForm.text.addEventListener('keypress', function() {
//     console.log("keypress " + event.key);
// })


// //zaprewaet cto to vvodit
// document.forms.myForm.text.addEventListener('keydown', function() {
//     if (event.key == 'f') {
//         event.preventDefault();
//         console.log("keydown");
//     }
// })



// document.forms.myForm.text.addEventListener('change', function() {
//     if (event.target.value.indexOf('@') > 0) {
//         console.log('ok');
//         event.target.classList.remove('invalid');

//         //event.target.nextElementSibling.style.display = 'none';
//     } else {
//         console.log('no');
//         event.target.classList.add('invalid');
//         // event.target.nextElementSibling.style.display = 'block';
//     }
// })

// document.forms.myForm.text.addEventListener('input', function() {
//     console.log("input");
// })


document.forms.myForm.text.addEventListener('focus', function() {
    console.log("focus");

    event.target.classList.add('invalid');
});

document.forms.myForm.text.addEventListener('blur', function() {
    console.log("blur");
    // if (event.target.value.indexOf('@') < 0) {
    //     console.log('ok');
    //     event.target.classList.add('invalid');
    // } 
    let regex = /^[a-z]{1,}@[a-z]{1,}.[a-z]{2,}$/i;
    if (event.target.value.match(regex)) {
        console.log('ok');
        event.target.classList.remove('invalid');
    }
});