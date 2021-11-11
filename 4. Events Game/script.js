function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//Можно было и без этой функции обойтись для времени
// но я хотел чтоб миллисекунды были

function TimeCheck() {
    if (ml <= 0) {
        if (sec > 0) {
            ml += 60;
            sec--;
        } else {
            min--;
            sec += 60;
        }
    }
}

function boxMoving(box) {
    const number = Random(1, 9);

    switch (number) {
        case 1:
            box.style.left = `${Random(0,window.innerWidth-101)}px`;
            break; //left
        case 2:
            box.style.top = `${Random(50,window.innerHeight-101)}px`;
            break; //top
        case 3:
            box.style.right = `${Random(0,window.innerWidth-101)}px`;
            break; //right
        case 4:
            box.style.bottom = `${Random(50,window.innerHeight-101)}px`;
            break; //bottom
        case 5:
            box.style.bottom = `${Random(50,window.innerHeight-101)}px`;
            box.style.left = `${Random(0,window.innerWidth-101)}px`;
            break; //left-bottom
        case 6:
            box.style.right = `${Random(0,window.innerWidth-101)}px`;
            box.style.bottom = `${Random(50,window.innerHeight-101)}px`;
            break; //right-bottom 
        case 7:
            box.style.right = `${Random(0,window.innerWidth-101)}px`;
            box.style.top = `${Random(50,window.innerHeight-101)}px`;;
            break; //right-top
        case 8:
            box.style.top = `${Random(50,window.innerHeight-101)}px`;
            box.style.left = `${Random(0,window.innerWidth-101)}px`;
            break; //left-top
        default:
            break;
    }
}

let countBoxs = parseInt(prompt("Welcome my game\nHow many boxes do you want ?(min = 5 , max = 1000) "));
if (countBoxs > 1000) {
    countBoxs = 1000;
} else if (countBoxs < 5) {
    countBoxs = 5;
}

let time = parseInt(prompt("How much time do you need ?(default 30 min) \n1 - 1 min\n2 - 2 min\n3 - 5 min\n4 - 10 min "));

let min = 0;
let sec = 0;
let ml = 0;

switch (time) {
    case 1:
        min = 1;
        break;
    case 2:
        min - 2;
        break;
    case 3:
        min = 5;
        break;
    case 4:
        min = 10;
        break;

    default:
        min = 30;
        break;
}


let container = document.getElementById("container");

for (let i = 0; i < countBoxs; i++) {
    let element = document.createElement("div");
    element.className = "box";
    element.style.backgroundColor = `rgb(${Random(0,255)},${Random(0,255)},${Random(0,255)})`;
    element.innerText = `${i}`;
    element.setAttribute("data-box", "");

    element.style.left = `${Random(0,window.innerWidth-100)}px`;
    element.style.top = `${Random(50,window.innerHeight-100)}px`;
    container.appendChild(element);
}

container.addEventListener("click", function() {
    if (event.target.className == 'box') {
        event.target.remove();
    }
});



let boxs = document.querySelectorAll('[data-box]');
let movingId = setInterval(() => {
    for (const box of boxs) {
        boxMoving(box);
    }
}, 1000);



let TimeId = setInterval(function() {
    let p = document.querySelector('[data-time]');
    ml--;

    let count = document.querySelectorAll('[data-box]').length;
    let left = document.querySelector('[data-score]');
    left.innerText = "Left : " + count;
    if (count == 0) {
        clearInterval(TimeId);
        clearInterval(movingId);
        let p = document.querySelector('[data-score]');
        p.innerText = `Left : none  YOU WIN!!!`;
    } else if (min == 0 && sec == 0 && ml == 0) {
        p.innerText = `Time  : 00:00:00`;
        clearInterval(TimeId);
        clearInterval(movingId);
        left.innerText = "Left : " + count + "  You lose";
    } else {

        TimeCheck();
        p.innerText = `Time  : ${min}:${sec}:${ml}`;
    }

}, 15)