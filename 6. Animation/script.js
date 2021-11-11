let selectDiv = prompt("Which div will you animate ?(red,green,blue)");


let num = parseInt(prompt("Choose animation:\n\n1 - Rotate\n2 - Scale\n3 - Ramdom Color\n4 - Move on edges"))

let sec = parseInt(prompt("How many seconds to keep animating?"))

function Random(min = 0, max = 10) {
    return Math.floor(Math.random() * 10000) % (max - min + 1) + min;
}

let box = document.querySelector(`.${selectDiv}`);
let style, width, interval, rotate = 0,
    rightt = 0,
    leftt = 0,
    topp = 0,
    bottomm = 0,
    color1 = 0,
    color2 = 0,
    color3 = 0;
switch (num) {
    case 1:
        interval = setInterval(() => {
            style = getComputedStyle(box);
            rotate += 180;
            if (sec == 0) {
                clearInterval(interval);
            }
            sec--;
            box.style.setProperty('transform', `rotate(${rotate}deg)`)
        }, 1000)
        break;
    case 2:
        interval = setInterval(() => {
            style = getComputedStyle(box);
            width = parseInt(style.width) + 60;
            if (sec == 0) {
                clearInterval(interval);
            }
            sec--;
            box.style.setProperty('width', `${width}px`)
        }, 1000);
        break;
    case 3:
        interval = setInterval(() => {
            style = getComputedStyle(box);
            color1 = Random(1, 254);
            color2 = Random(1, 254);
            color3 = Random(1, 254);
            console.log(color1 + " " + color2 + " " + color3);
            if (sec == 0) {
                clearInterval(interval);
            }
            sec--;
            box.style.setProperty('background-color', `rgb(${color1},${color2},${color3})`)
        }, 1000);
        break;
    case 4:
        box.style.setProperty('position', 'absolute');
        box.style.setProperty('top', `0px`)
        box.style.setProperty('right', `0px`)
        box.style.setProperty('left', `0px`)
        box.style.setProperty('bottom', `0px`)

        interval = setInterval(() => {


            style = getComputedStyle(box);
            if (parseInt(style.left) < parseInt(innerWidth) - 195) {
                leftt = parseInt(style.left) + 150;
                box.style.setProperty('left', `${leftt}px`)
            } else if (parseInt(style.top) < parseInt(innerHeight) - 173) {
                topp = parseInt(style.top) + 150;
                box.style.setProperty('top', `${topp}px`)
            } else if (parseInt(style.right) < parseInt(innerWidth) - 195) {
                rightt = parseInt(style.right) + 150;
                box.style.setProperty('right', `${rightt}px`)
            }

            // let top = parseInt(style.top) + 50;
            //let left = parseInt(style.left) + 50;
            //let bottom = parseInt(style.bottom) + 50;

            if (sec == 0) {
                clearInterval(interval);
            }
            //console.log(window.innerWidth);
            // console.log(window.outerWidth);
            sec--;
            //box.style.setProperty('position', 'absolute');
            // box.style.setProperty('top', `${top}px`)
            //box.style.setProperty('right', `${right}px`)
            // box.style.setProperty('left', `${left}px`)
            // box.style.setProperty('bottom', `${bottom}px`)
        }, 1000)
        break;

    default:
        break;
}