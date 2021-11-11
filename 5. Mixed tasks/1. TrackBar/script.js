let isMove;
let cursor = document.querySelector('.cursor');
//При нажатие мышки разрешить перемещение (разрешение перемещении)
cursor.addEventListener('mousedown', function() {
    isMove = true;
    console.log('true');
});

let body = document.querySelector('body');
//При спуска мышки прекратить перемещение (запрет перемещении)
body.addEventListener('mouseup', function() {
    isMove = false;
    console.log('false');
});

//По зажатие мыши перемещение
body.addEventListener('mousemove', function() {
    if (isMove) {
        if (event.clientX >= 40 && event.clientX <= 710) {
            cursor.style.left = (event.clientX - 50) + 'px';
        }
    }
})

//По клике перемещение
let trackBar = document.querySelector('.trackBar');
trackBar.addEventListener('click', function() {
    if (event.clientX >= 40 && event.clientX <= 710) {
        cursor.style.left = (event.clientX - 50) + 'px';
    }
})