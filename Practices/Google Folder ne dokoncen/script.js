let addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function() {
    let userText = prompt("Enter your text");
    let templateHtml = document.querySelector('#listItem').innerHTML;
    let templaate = Handlebars.compile(templateHtml);
    var html = templaate({ text: userText });
    let list = document.querySelector('#items');
    list.insertAdjacentHTML('beforeend', html);
})


//                        pravaya menyu 
document.addEventListener('contextmenu', function(params) {
    if (event.target.tagName == 'IMG') {
        let menyu = document.querySelector('#contextMenyu');
        menyu.style.display = 'block';

        menyu.style.top = event.y + 'px';
        menyu.style.left = event.x + 'px';
        event.preventDefault(); //pravaya menyu ne vixodit
    }
})


document.addEventListener('click', function(params) {
    let menyu = document.querySelector('#contextMenyu');
    let item = menyu.querySelector('li');
    console.log(item);
    menyu.style.display = 'none';
})

document.addEventListener('click', function() {

})