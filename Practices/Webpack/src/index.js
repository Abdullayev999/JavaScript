//import './style.css'
import './style.scss'
import './test.css'

import car from './kartina.jpg'
//mport '../node_modules/bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

import jsonData from './data.json'
import xmlData from './data.xml'

import csvData from './data.csv'

console.log(csvData);
console.log(xmlData);
console.log(jsonData);
console.log(car);

$('#img').attr('src', car)
console.log($);

$(document.body).append(`
<div style="color:red">Hello!!!!</div>
`);

console.log($('#header').text());;

console.log('Hello');