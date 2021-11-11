function Random(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < 80; i += 10) {
    let element = document.createElement('div')
    element.style.setProperty('width', `100px`);
    element.style.setProperty('height', `100px`);
    element.style.setProperty('background', `red`);
    element.style.setProperty('cursor', `pointer`);
    element.style.setProperty('color', `white`);
    element.style.setProperty('user-select', `none`);
    element.style.setProperty('margin', `5px`);
    element.style.setProperty('border', `5px solid black`);
    element.style.setProperty('display', `flex`);
    element.style.setProperty('align-items', `center`);
    element.style.setProperty('font-size', `30px`);
    element.style.setProperty('justify-content', `center`);
    element.innerText = 0;
    element.style.position = "absolute";
    element.style.top = `${Random(150,1000)}px`;
    element.style.left = `${Random(0,1000)}px`;
    document.body.appendChild(element);
}

let score = 0;

for (const box of document.body.children) {
    box.addEventListener('click', function() {
        let num = parseInt(event.target.innerText);
        num++;
        if (num == 5) {
            event.target.remove();
            score++;
            let p = document.querySelector('[data-score]');
            p.innerText = `Score : ${score}`;
        }
        event.target.innerText = num;
        console.log(10);


    })
}

let min = 5;
let sec = 0;
let ml = 0;
let id = setInterval(function() {
    let p = document.querySelector('[data-time]');
    ml--;

    let count = document.body.children.length;
    console.log(count);
    if (count == 4) {
        clearInterval(id);
        let p = document.querySelector('[data-score]');
        p.innerText = `Score : ${score} YOU WIN!!!`;
    } else if (min == 0 && sec == 0 && ml == 0) {
        p.innerText = `Time  : 00:00:00`;
        clearInterval(id);
    } else {

        TimeCheck();
        p.innerText = `Time  : 0${min}:${sec}:${ml}`;
    }

}, 15)

function TimeCheck() {
    if (ml <= 0) {
        if (sec > 0) {
            ml += 60;
            sec--;
        } else {
            min--;
            sec += 60;

        }

    } else {
        this.e
    }
}