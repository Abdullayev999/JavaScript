document.forms.myForm.addEventListener('submit', function() {
    event.preventDefault();
    let text = document.querySelector('textarea').value;
    let p = document.querySelector('#result');
    p.textContent = text;
    //чтоб каждый раз формировал то что выбрано
    p.style = 'none';



    if (document.querySelector('#Bold').checked) {
        p.style.setProperty('font-weight', 'bold');
    }

    if (document.querySelector('#Uderline').checked) {
        p.style.setProperty('text-decoration', 'underline');
    }

    if (document.querySelector('#Italic').checked) {
        p.style.setProperty('font-style', 'italic');
    }

    switch (document.forms.myForm.type.value) {
        case 'Left':
            p.style.setProperty('text-align', 'left');
            break;
        case 'Right':
            p.style.setProperty('text-align', 'right');
            break;
        case 'Justify':
            p.style.setProperty('text-align', 'justify');
            break;

        default:
            break;
    }
    document.forms.myForm.hidden = true;
    document.querySelector('.result').hidden = false;
    document.querySelector('.result').insertAdjacentHTML(p);
})

//Появление кнопки Show text
let btn = document.querySelector('button');
let text = document.querySelector('textarea');
text.addEventListener('input', function() {
    if (text.value.length > 0) {
        btn.hidden = false;
    } else {

        btn.hidden = true;
    }
})

//Вернуться нзад
let back = document.querySelector('#back');
back.addEventListener('click', function() {
    document.forms.myForm.hidden = false;
    document.querySelector('.result').hidden = true;
})