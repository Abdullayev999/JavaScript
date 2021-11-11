// //podksazka metodov
// /**
//  * @type { HTMLCanvasElement}
//  */

// // let canvas = document.getElementById('myCanvas');
// let canvas = document.querySelector('#myCanvas');
// let context = canvas.getContext('2d'); //2d,webgl,webgl2



// context.fillStyle = 'red';
// context.fillRect(100, 100, 250, 250);

// context.strokeRect(110, 110, 250, 250);





/////////////////////////////////////////////
//CANVAS
// function Random(min, max) {
//     return Math.random() * (max - min) + min;
// }


// let data = [];
// for (let i = 0; i < Random(3, 20); i++) {
//     data.push(Random(0, 10000));
// }

// function drawChart(data) {
//     /**
//      * @type { HTMLCanvasElement}
//      */

//     let canvas = document.querySelector('#myCanvas');
//     let context = canvas.getContext('2d');

//     let columWidth = canvas.width / data.length;
//     console.log(columWidth);

//     // //////////////////////////////////
//     // let max = Math.max(...data);
//     // let percents = [];
//     // for (const item of data) {
//     //     percents.push(item / (max - 100))
//     // }
//     // console.log(percents);
//     // /////////////////////////////////

//     let max = Math.max(...data);

//     let result = data.map(x => x / (max / 100));


//     let color = 255;
//     for (let i = 0; i < data.length; i++) {
//         //     switch (i) {
//         //         case 0:
//         //             context.fillStyle = 'red';
//         //             break;
//         //         case 1:
//         //             context.fillStyle = 'blue';
//         //             break;
//         //         case 2:
//         //             context.fillStyle = 'green';
//         //             break;
//         //         case 3:
//         //             context.fillStyle = 'pink';
//         //             break;
//         //         case 4:
//         //             context.fillStyle = 'black';
//         //             break;
//         //         case 5:
//         //             context.fillStyle = 'yellow';
//         //             break;
//         //         case 6:
//         //             context.fillStyle = 'green';
//         //             break;

//         //         default:
//         //             break;
//         //     }

//         context.fillStyle = `rgb(${color-=10},${color-=10},${color})`;
//         // context.fillRect(columWidth * i, 0, columWidth, data[i]);//perevernutaya statsitica
//         //context.fillRect(columWidth * i, canvas.height, columWidth, -data[i]);
//         context.fillRect(columWidth * i, canvas.height, columWidth, -result[i]); // vivod v procentov
//         context.fillRect(columWidth * i, canvas.height, columWidth, -result[i] * 5); // vivod v cislovom otnowenii

//     }
// }

// //drawChart([100, 200, 300, 400, 500, 200, 700]);
// drawChart(data);



// ///////////////////////////////////////////////////////////


// /**
//  * @type { HTMLCanvasElement}
//  */

// let canvas = document.querySelector('#myCanvas');
// let context = canvas.getContext('2d');

// // context.moveTo(0, 0);
// // context.lineTo(100, 100);
// // context.lineTo(200, 500);
// // context.lineTo(300, 200);
// // context.lineTo(500, 400);
// // context.stroke();


// // context.arc(250, 250, 200, 0, 300 / 180 * Math.PI);
// // context.lineTo(250, 250);
// // //context.fill();
// // context.stroke();

// let degree = 0;
// setInterval(() => {
//     context.arc(250, 250, 200, 0, (++degree % 361) / 180 * Math.PI);
//     context.lineTo(250, 250);
//     context.fill();
// }, 30);



///////////////////////////////////////////////////////////
//RISOVANIE

/**
 * @type { HTMLCanvasElement}
 */

let canvas = document.querySelector('#myCanvas');
let context = canvas.getContext('2d');


context.strokeStyle = 'red';
context.lineWidth = 5;
// context.lineCap = 'round'
// context.lineCap = 'butt'
canvas.addEventListener('mousemove', () => {
    if (event.buttons == 1) {
        context.lineTo(event.offsetX, event.offsetY)
        context.stroke();
    } else {
        context.beginPath();
    }
});


document.addEventListener('keydown', () => {
    if (event.key == '1') {
        context.lineWidth++;
    } else if (event.key == '2') {
        context.lineWidth--;
    }
});