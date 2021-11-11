//let h1 = document.querySelector('h1');
//h1.innerText = "Header" // content
//h1.innerHTML = "<i>Test</i>";//vkladivaet html kod v vnutr
//h1.outerHTML = '<button>Click me</button>';//zamenyayet na html

//const Handlebars = require("handlebars");


//dovaka v html
// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector('#items');
//     let text = prompt("Enter your text");

//     list.innerHTML += `<li>${text}</li>`;
// })



//dovaka v html
// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let li = document.createElement('li');
//     li.innerText = prompt("Enter text");
//     let list = document.querySelector('#items');
//     list.appendChild(li);
// })


// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let li = document.createElement('li');
//     li.innerText = prompt("Enter text");
//     li.style.color = 'red';
//     let list = document.querySelector('#items');
//     // list.appendChild(li);
//     list.append(li); // DOBAVKO KONEC
//     //list.prepend(li); // DOBAVKA V NACALO

//     //let li2 = li.cloneNode(true);
//     // deep Clone 


//     //list.before(li); // dobavka dohtml
//     //list.after(li2); // dobavka posle html

//     //let firstLi = document.querySelector('#items > li');//posle 1oqo
//     //firstLi.after(li);

//     // list.replaceWith(li); //zamenit
//     //list.remove(); udalenie

//     //sozdanie object
//     //let obj = Object.create();
// })




// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() { 
//     let li = document.createElement('li');
//     li.innerText = prompt("Enter your text");
//     li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')

//     let bage = document.createElement('span');
//     bage.innerText = 1;
//     bage.classList.add('badge', 'bg-primary', 'rounded-pill')
//     li.append(bage);

//     let list = document.querySelector('#items');
//     list.append(li); // DOBAVKO KONEC 

// })





// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let text = prompt("Enter your text");
//     let count = 0;
//     let list = document.querySelector('#items');
//     list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
//     ${text}
//     <span class="badge bg-primary rounded-pill">${count}</span>
//   </li>`;
// })





// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let text = prompt("Enter your text");
//     let count = 0;
//     let list = document.querySelector('#items');

//     list.insertAdjacentHTML('afterbegin', `<li class="list-group-item d-flex justify-content-between align-items-center">
//    ${text}
//    <span class="badge bg-primary rounded-pill">${count}</span>
//  </li>`); 
// })





// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let template = document.querySelector('#listItem');
//     let list = document.querySelector('#items');
//     list.insertAdjacentHTML('beforeend', template.innerHTML);
// })


//xorowiy variant
// // let addBtn = document.querySelector('#addBtn');
// // addBtn.addEventListener('click', function() {
// //     let template = document.querySelector('#listItem');
// //     let clone = template.content.cloneNode(true);
// //     clone.querySelector('li').innerText = prompt("Enter your text : ")
// //     let list = document.querySelector('#items');
// //     list.append(clone);
// // })



//BEST VARIANT
// let addBtn = document.querySelector('#addBtn');
// addBtn.addEventListener('click', function() {
//     let userText = prompt("Enter your text");
//     let templateHtml = document.querySelector('#listItem').innerHTML;
//     let templaate = Handlebars.compile(templateHtml);
//     var html = templaate({ text: userText, count: parseInt(prompt("Enter num uvedomleniy : ")) });
//     let list = document.querySelector('#items');
//     list.insertAdjacentHTML('beforeend', html);
// })




let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function() {
    let userText = prompt("Enter your text");
    let templateHtml = document.querySelector('#listItem').innerHTML;
    let templaate = Handlebars.compile(templateHtml);
    var html = templaate({ text: userText, count: parseInt(prompt("Enter num uvedomleniy : ")) });
    let list = document.querySelector('#items');
    list.insertAdjacentHTML('beforeend', html);
})


//                        pravaya menyu 
document.addEventListener('contextmenu', function(params) {
    if (event.target.tagName == 'LI') {
        console.log('ok');
        let menyu = document.querySelector('#contextMenyu');
        menyu.style.display = 'block';

        menyu.style.top = event.y + 'px';
        menyu.style.left = event.x + 'px';
        event.preventDefault(); //pravaya menyu ne vixodit
    }
})


document.addEventListener('click', function(params) {
    let menyu = document.querySelector('#contextMenyu');
    menyu.style.display = 'none';
})