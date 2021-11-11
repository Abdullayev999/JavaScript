// function OnBoxClick() {
//     console.log(event);
// }

// function OnBoxClick() {
//     console.log(event.target.innerText);
// }

// function OnDivAction() {
//     console.log('Action');
// }


// //povesili action cerez js
// let element = document.getElementById('redBox');
// element.onclick = OnDivAction;


//povesili action cerez js
//let element = document.getElementById('redBox');
//element.onclick = undefined; udalenie

//document.addEventListener("click", OnDivAction);

// document.addEventListener("click", function() {
//     console.log('Action');
// });

// document.addEventListener("click", () => {
//     console.log('Action');
// });

// let div = document.getElementById('div');
// let p = document.getElementById('p');
// let span = document.getElementById('span');

// function LogEvent() {
//     // console.log("TARGET");
//     //console.log(event.target);

//     // console.log("CURRENT TARGET");
//     console.log(event.currentTarget);

// }

// //podpisivanie na splitie
// div.addEventListener("click", LogEvent);
// p.addEventListener("click", LogEvent);
// span.addEventListener("click", LogEvent);

// //podpisivanie na poqrujenie
// div.addEventListener("click", LogEvent, true);
// p.addEventListener("click", LogEvent, true);
// span.addEventListener("click", LogEvent, true);



// span.addEventListener("click", function() {
//     event.stopPropagation(); //ostanovka eventa
// });



//FOR TASK!!!!!!!!!!!!!
// let link = document.getElementById('link');
// link.addEventListener("click", function() {
//     event.preventDefault();
//     //event.target.style.display = "none"; SKRIT ELEMENT
//     //  event.target.remove();UDALYAYET ELEMENT
// })




// //proqruzka stranici
// document.addEventListener('DOMContentLoaded', function() {
//     console.log("ok");
// })


// let boxes = document.querySelectorAll('.box');
// for (const box of boxes) {
//     box.addEventListener('click', function() {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     })
// }



//FOR TASK

// let container = document.querySelector('#boxContainer');

// container.addEventListener('click', function() {
//     if (event.target.className == 'box') {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     }
// })




//FOR TASK

// let boxes = document.querySelectorAll('[data-counter]');
// for (const box of boxes) {
//     box.addEventListener('click', function() {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     })
// }


//cawe vseqo ispolzuyutsa

// let container = document.querySelector('#boxContainer');

// container.addEventListener('click', function() {
//     if (event.target.dataset.counter != undefined) {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     }
// })


let opened;

let togglers = document.querySelectorAll('[data-target="#modalId"]');
for (const btn of togglers) {
    btn.addEventListener('click', function() {
        let id = event.target.dataset.target;
        if (id != undefined) {
            let modal = document.querySelector(id);
            modal.style.display = 'block';
            document.querySelector("#overlay").style.display = "block";
            opened = id;
        }
    })
}

document.querySelector("#overlay").addEventListener('click', function() {
    event.target.style.display = "none";
    document.querySelector(opened).style.display = "none";
})