/**
 * @type {HTMLCanvasElement}
 */
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');



let instrument = 'pencil';
context.lineWidth = 1;
context.strokeStyle = 'black';
let figureSize = 10;

document.querySelector('#btn').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
})

document.querySelector('.colors').addEventListener('click', function() {
    let color = event.target.classList[0];
    context.strokeStyle = color;
    context.fillStyle = color;
})



document.querySelector('.figures').addEventListener('click', function() {
    instrument = event.target.value;
})



document.querySelector('#minus').addEventListener('click', function() {
    let lineSize = parseInt(document.querySelector('#size').innerText);
    if (lineSize > 1) {
        lineSize--;
        document.querySelector('#size').innerText = lineSize;
        context.lineWidth = lineSize;
    }
})


document.querySelector('#number').addEventListener('input', function() {
    let number = parseInt(event.target.value);
    figureSize = number;
    document.querySelector('#sizeF').innerText = number;
})


document.querySelector('#plus').addEventListener('click', function() {
    let lineSize = parseInt(document.querySelector('#size').innerText);
    if (lineSize < 100) {
        lineSize++;
        document.querySelector('#size').innerText = lineSize;
        context.lineWidth = lineSize;
    }
})



canvas.addEventListener('mousemove', () => {
    if (event.buttons == 1) {
        drawing(instrument);
    }
});

function drawing(instrument) {
    switch (instrument) {
        case 'pencil':
            context.lineTo(event.offsetX, event.offsetY)
            context.stroke();
            break;
        case 'square':
            context.fillRect(event.offsetX - figureSize / 2, event.offsetY - figureSize / 2, figureSize, figureSize);
            break;
        case 'fill':
            context.fillRect(0, 0, canvas.width, canvas.height);
            break;
        case 'rhombus':
            context.moveTo(event.offsetX, event.offsetY + figureSize); // Top
            context.lineTo(event.offsetX - figureSize, event.offsetY); // Left
            context.lineTo(event.offsetX, event.offsetY - figureSize); // Bottom
            context.lineTo(event.offsetX + figureSize, event.offsetY); // Right
            context.lineTo(event.offsetX, event.offsetY + figureSize); // Back to Top 
            context.fill();
            break;
        case 'triangle':
            context.moveTo(event.offsetX, event.offsetY - figureSize / 2);
            context.lineTo(event.offsetX + figureSize, event.offsetY + figureSize);
            context.lineTo(event.offsetX, event.offsetY + figureSize);
            context.fill();
            break;
        case 'circle':
            context.arc(event.offsetX, event.offsetY, figureSize, 0, 2 * Math.PI);
            context.fill();
            break;
        default:
            break;
    }
}


canvas.addEventListener('mousedown', () => {
    context.beginPath();
    drawing(instrument);
});

canvas.addEventListener('mouseup', () => {
    context.closePath();
});