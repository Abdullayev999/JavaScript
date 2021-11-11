function onBoxClick() {
    console.clear();
    console.log(event);
    event.target.innerText = "Farid";
}


// let element = document.getElementById("redBox");
// element.onclick = onBoxClick;
// //==
// element.addEventListener("click", onBoxClick);

// let element = document.getElementById("redBox");
// //element.addEventListener("click", onBoxClick);
// // element.addEventListener("click", function() {
// //     console.log("Action");
// // });
// element.addEventListener("click", () => {
//     console.log("Action");
// });

// let div = document.getElementById("div");
// let p = document.getElementById("p");
// let span = document.getElementById("span");

// function logEvent() {

//     // console.log("Target");
//     // console.log(event.target);
//     console.log("-----");
//     console.log("Current Target");
//     console.log(event.currentTarget);
//     //Прекращает дальнейшую передачу текущего события.
//     //event.stopPropagation();

//     //Останавливает цепочку вызова событий для обработчиков DOM-элемента.
//     //event.stopImmediatePropagation();
//     // VZAVISIMOSTI GDE POSTAVIM TAM I OSTANAVLIVAET 
// }

// // div.addEventListener("click", logEvent, true); //Pogrujenie
// // p.addEventListener("click", logEvent, true);
// // span.addEventListener("click", logEvent, true);


// div.addEventListener("click", logEvent, false); //vsplitie
// p.addEventListener("click", logEvent, false);
// span.addEventListener("click", logEvent, false);


// let link = document.getElementById("link");
// link.addEventListener("click", function() {
//     event.preventDefault();
// })


//Zaqruzka posle podqruzki vsey stranici
// document.addEventListener('DOMContentLoaded', function() {
//     let link = document.getElementById("link");
//     link.addEventListener("click", function() {

//         //event.target.style.display = 'none'; SKRIT ELEMENT
//         // event.target.remove(); // udalit element
//         event.preventDefault();
//     })
// })



//PLOXOY VARIANT
// let boxs = document.getElementsByClassName("box");

// for (const box of boxs) {
//     box.addEventListener("click", function() {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;

//     })

// }

//XOROWIY VARIANT
// let container = document.querySelector('.container');
// container.addEventListener("click", function() {
//     if (event.target.className == "box") {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     }
// })


//Cikl ploxo
// let container = document.querySelectorAll('[data-counter]');
// for (const box of container) {
//     box.addEventListener("click", function() {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     })
// }


// let container = document.querySelector('.container');
// container.addEventListener("click", function() {
//     console.log(event);
//     if (event.target.dataset.counter != undefined) {
//         let num = parseInt(event.target.innerText);
//         num++;
//         event.target.innerText = num;
//     }
// })

let modal;
let togglers = document.querySelectorAll('[data-toggle="modal"]');
for (const btn of togglers) {
    btn.addEventListener('click', function() {
        let id = event.target.dataset.target;
        if (id != undefined) {
            modal = document.querySelector(id);
            modal.style.display = 'block'
            document.querySelector('#overlay').style.display = 'block'
        }
    });
}

document.querySelector('#overlay').addEventListener("click", function() {
    event.target.style.display = 'none';
    modal.style.display = 'none'
})