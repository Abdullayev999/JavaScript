// document.addEventListener('DOMContentLoaded',()=>{
// // let elem = document.querySelector('#test');
// // elem.innetText = 'Hello from JQuery';
// })

//=========
// window.$ = window.jQuery = {

// } 

///=========
//=========================
// $(document).ready(function() { 
//     let elem = $('#test');
//     console.log(elem);
//     elem.text('Hello from JQuery');  
// });
//=========================
// $(function() {

//     let elem = $('#test');
//     console.log(elem);
//     elem.text('Hello from JQuery');
// });
//===========================
//defer
///////////////////////////////////////////////////

// let elemJS = document.querySelector('#test');
// let elemJQ = $('#test');

// console.dir(elemJS);
// console.dir(elemJQ);
/////////////////////////////////////////////////////

// let elemJS = document.querySelectorAll('p');
// for (const element of elemJS) {
//     element.innerHTML = 'JS';
// }
// //============================================

// let elemJQ = $('p');
// elemJQ.text('JQuery');


// console.dir(elemJS);
// console.dir(elemJQ);

/////////////////////////////////////////////////////

// let elemJS = document.querySelectorAll('p');
// $(elemJS).text("test");


/////////////////////////////////////////////////////


// let elemJS = document.querySelector('p');
// let elemJQ = $(elemJS).text("test");
// console.log(elemJQ[0]);

/////////////////////////////////////////////////////


// $('p').text("test");//set
// $('p').text();//get


// $('p').text("test"); //set
// $('p:last').text(); //get
// console.log($('p:first').text());

//////////////////////////////////////////////


// $('p').attr('title', 'hello!'); //set
// console.log($('p').attr('title')); //get


/////////////////////////////////////////////////
//v js budet v html net
//$('p').prop('title', 'hello!');


/////////////////////////////////////////////////


// $('p').height('100');
// $('p').width('100');



/////////////////////////////////////////////////

// $('p:first').addClass('red');
// $('p:first').addClass('red green blue');
// $('p:last').addClass('green');
// $('p').height('100');
// $('p').width('100');

// //esli est udalit esli net dobavit
// $('p:last').toggleClass('green');


///////////////////////////////////////////////

// // //get
// // let elem = $('p').data('id');
// // console.log(elem);

// // $('p:last').data('ok', '10');

// $('p:first').attr('data-id', 2);
// $('p:last').attr('data-ok', 2);

// ///////////////////////////////////////////////////
// console.log(getComputedStyle(document.querySelector('p')).color);

// // $('p').css('color', 'red');
// $('p').css({ 'color': 'red', 'background-color': 'blue' });
// console.log($('p').css('color'));

// ///////////////////////////////////////////////////

// console.log($('#text').val());
// console.log($('#text').position());//poziciya elementa


///////////////////////////////////////////////////


// console.log($('#text').offset());
// console.log($('#text').offset({ 'top': 200, 'left': 300 })); //peremewenie elementa




////////////////////////////////////////////////////////////

// let elemJS = document.querySelectorAll('p');
// for (const element of elemJS) {
//     element.addEventListener('click', function() {
//         console.log(event);
//     })
// }

//==================================

// $('p').click(function(e) {
//     e.preventDefault();
//     // console.log(this.innerText);
//     // this.innerText = 'ok';
//     // $(this).text('ok');
//     console.log(event);
// });



// $('p').click(function(e) {
//     e.preventDefault();
//     $(this)
//         .text('click')
//         .addClass('red')
//         .attr('title', 'hello');
// });



// $('p').click(function(e) {
//     e.preventDefault();
//     $(this)
//         .text('click')
//         .addClass('red')
//         .attr('title', 'hello');
// });


// $('p').click(function(e) {
//     e.preventDefault();
//     $(this).hide();
//     console.log('hide');
//     $(this).show();
//     console.log('show');

// });

// $('p').click(function(e) {
//     e.preventDefault();
//     $(this).toggle();
//     //esli hidden to delaet show esli show to delaet hidden  
// });

//////////////////////////////////////////////////////

// $('#btn').click(function(e) {
//     e.preventDefault();
//     // $('p').toggle(500); //animaciya na 500 sec
//     $('p').stop().toggle(500); //animaciya bistraya na 500 sec
// });


///////////////////////////////////////////////////////

// $('#btn').click(function(e) {
//     e.preventDefault();
//     // $('p').fadeOut(1000); //menyayetsa opacity podtom display none 
//     //  $('p').fadeToggle();
//     //$('p').fadeTo(200, 0.6); 
// });


/////////////////////////////////////////////////////////////

// $('#btn').click(function(e) {
//     e.preventDefault();
//     $('p').fadeToggle(2000, function() {
//         console.log('ok');
//     });
// });

/////////////////////////////////////////////////////////////

// $('#btn').click(async function(e) {
//     e.preventDefault();
//     await $('p').fadeToggle(2000).promise();
//     console.log('123');
// });

/////////////////////////////////////////////////////////////
// //animation
// $('#btn').click(function(e) {
//     e.preventDefault();
//     //$('p').slideToggle();

//     $('p')
//         .animate({ 'height': '100' }, 1000)
//         .animate({ 'background-color': 'green' }, 1000)
//         .animate({ 'color': 'red' }, 1000)
//         .animate({ 'width': '200' }, 1000)
//         .animate({ 'height': '50' }, 1000);
// });


// // /////////////////////////////////////////////////////////////
// //animation
// $('#btn').click(async function(e) {
//     e.preventDefault();
//     //$('p').slideToggle();

//     await $('p')
//         .animate({ 'height': '100' }, 1000)
//         .animate({ 'background-color': 'green' }, 1000)
//         .animate({ 'color': 'red' }, 1000)
//         .animate({ 'width': '200' }, 1000)
//         .animate({ 'height': '50' }, 1000).promise();
//     console.log('1');
// });


// // ///////////////////////////////////////////////////////////// 
// $('#btn').click(function(e) {
//     //$('p').append('<button>Click</button>');

//     let button = document.createElement('button');
//     // $('p').append(button);
//     ////////////////////////////////////clonirovat eventi i paramteri
//     $('p').append($('#btn').clone(true, true));
// });


// ///////////////////////////////////////////////////////////// 
$('#btn').click(function(e) {
    let button = document.createElement('button');
    $('p').prepend($('#btn').clone(true, true));
    $('p').append($('#btn').clone(true, true));
    $('p').after($('#btn').clone(true, true));
    $('p').before($('#btn').clone(true, true));
});