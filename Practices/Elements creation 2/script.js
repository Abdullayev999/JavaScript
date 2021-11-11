//let element = document.querySelector("h1");
//element.innerText = 'Header';  // vnutrinniy content
//element.innerHTML = '<p>Hi</p>'; // vnutrinniy kod
//element.outerHTML = '<button>Click me</button>';// sam kod


//NE XOROWIY VARIANT
// let addBtn = document.querySelector("#addBtn");
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector("#list");

//     let text = prompt('Enter your text');
//     //list.innerHTML = `<li>${text}</li>`;//PEREZAPISIVAET
//     //list.innerHTML += `<li>${text}</li>`; //dOBAVLYAYET  
// });


// //XOROWIY VARIANT
// let addBtn = document.querySelector("#addBtn");
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector("#list");

//     let text = prompt('Enter your text');
//     let li = document.createElement('li');
//     li.style.color = 'red';
//     li.innerText = text;

//     //list.appendChild(li);
//     //list.prepend(li);//Dobavka v nacalo
//     //list.before(li); // do samoy kolekcii NE VNUTR
//     //list.after(li);// POSLE samoy kolekcii NE VNUTR
//     //let copy = li.cloneNode(); //Copirovanie elementa
//     //list.append(li);
//     //list.prepend(copy);

//     //let firstLi = document.querySelector('#list > li')//Dobavka posle 1oqo
//     //firstLi.append(li);

//     //list.replaceWith(li)//Zamena
//     //list.remove();//Udalenie
// });


// //XOROWIY VARIANT
// let addBtn = document.querySelector("#addBtn");
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector("#list");

//     let text = prompt('Enter your text');
//     let li = document.createElement('li');
//     li.innerText = text;
//     li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

//     let span = document.createElement('span');
//     span.classList.add('badge', 'bg-primary', 'rounded-pill');
//     span.innerText = '2';
//     li.appendChild(span);
//     list.appendChild(li);
// });


// //XOROWIY VARIANT
// let addBtn = document.querySelector("#addBtn");
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector("#list");
//     let number = 2;
//     let text = prompt('Enter your text');


//     //     list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
//     //     ${text}
//     //     <span class="badge bg-primary rounded-pill">${number}</span>
//     // </li>`;
//     //     list.appendChild(li);



//     list.insertAdjacentHTML('afterbegin', `<li class="list-group-item d-flex justify-content-between align-items-center">
//           ${text}
//           <span class="badge bg-primary rounded-pill">${number}</span>
//       </li>`);

//     list.insertAdjacentHTML('afterend', `<li class="list-group-item d-flex justify-content-between align-items-center">
//       ${text}
//       <span class="badge bg-primary rounded-pill">${number}</span>
//   </li>`);

//     list.insertAdjacentHTML('beforebegin', `<li class="list-group-item d-flex justify-content-between align-items-center">
//         ${text}
//         <span class="badge bg-primary rounded-pill">${number}</span>
//     </li>`);

//     list.insertAdjacentHTML('beforeend', `<li class="list-group-item d-flex justify-content-between align-items-center">
//           ${text}
//           <span class="badge bg-primary rounded-pill">${number}</span>
//       </li>`);

// });




//Ne xorowo VARIANT
// let addBtn = document.querySelector("#addBtn");
// addBtn.addEventListener('click', function() {
//     let list = document.querySelector("#list");
//     let number = 2;
//     let text = prompt('Enter your text');

//     let template = document.querySelector('#listItem');
//     let clone = template.content.cloneNode(true);
//     clone.querySelector('li').innerText = text;
//     list.append(clone);
// });



//XOROWIY VARIANT BEST!!!!!!!!!!!!!!!!!!!!!!!!TEMPLATE
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener('click', function() {
    let list = document.querySelector("#list");

    //Lib handlerss
    let templateHtml = document.querySelector('#listItem').innerHTML;
    let template = Handlebars.compile(templateHtml);

    //Dannie dlya vstavki
    let num = 20;
    let txt = prompt('Enter your text');

    //Zapolnenie
    let html = template({ text: txt, number: num });

    list.insertAdjacentHTML('beforeend', html);
});