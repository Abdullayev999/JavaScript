let regOnlyLetter = /^[a-zA-Z]+$/i;
let regHex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
let regRgb = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/;
let regRgba = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|0?\.\d|1(\.0)?)$/;

let arr = [];


function uload() {
    arr = document.cookie;

    if (arr) {
        let newArr = JSON.parse(arr.split('=')[1]);
        console.log(newArr);
        for (const box of newArr) {
            createNewBox(box.color, box.format, box.code);
        }
    } else {
        arr = [];
    }
}

document.addEventListener('DOMContentLoaded', function() {
    uload();
})

document.forms.myForm.colorInput.addEventListener('input', function() {
    if (event.target.value.match(regOnlyLetter) || event.target.value == '') {
        document.getElementById('erorColor').hidden = true;
    } else {
        document.getElementById('erorColor').hidden = false;
    }
})

let rgb = document.getElementById('errorRGB');
let rgba = document.getElementById('errorRGBA');
let hex = document.getElementById('errorHEX');

function Validator() {
    let element = document.getElementById("type");
    let text = element.options[element.selectedIndex].text;

    rgb.hidden = true;
    rgba.hidden = true;
    hex.hidden = true;

    if (event.target.value) {
        switch (text) {
            case 'RGB':
                if (!event.target.value.match(regRgb)) {
                    rgb.hidden = false;
                    rgba.hidden = true;
                    hex.hidden = true;
                }
                break;
            case 'RGBA':

                if (!event.target.value.match(regRgba)) {
                    rgb.hidden = true;
                    rgba.hidden = false;
                    hex.hidden = true;
                }
                break;
            case 'HEX':
                if (!event.target.value.match(regHex)) {
                    rgb.hidden = true;
                    rgba.hidden = true;
                    hex.hidden = false;
                }
                break;

            default:

                break;
        }
    }
}

document.forms.myForm.codeInput.addEventListener('input', Validator);

//чтобы работало если резко поменять формат
document.getElementById('type').addEventListener('change', Validator);

function checkValidationIsCorrect() {
    return rgb.hidden && rgba.hidden && hex.hidden;
}

document.forms.myForm.addEventListener('submit', function() {
    event.preventDefault();
    if (checkValidationIsCorrect()) {
        let colorInput = document.forms.myForm.colorInput.value;
        let element = document.getElementById("type");
        let formatInput = element.options[element.selectedIndex].text;
        let codeInput = document.forms.myForm.codeInput.value;


        // Первый сособ  
        // createNewBox(colorInput, formatInput, codeInput);


        // Второй способ (через шаблоны)
        let items = document.querySelector('.items');
        let tmplateHtml = document.querySelector('#templ').innerHTML;

        let template = Handlebars.compile(tmplateHtml);
        let html = template({ color: colorInput, format: formatInput, code: codeInput });

        items.insertAdjacentHTML('beforeend', html);

        switch (formatInput) {
            case 'RGB':
                items.lastElementChild.style.border = `50px solid rgb(${codeInput})`;
                break;
            case 'RGBA':
                items.lastElementChild.style.border = `50px solid rgba(${codeInput})`;
                break;
            case 'HEX':
                items.lastElementChild.style.border = `50px solid ${codeInput}`;
                break;

            default:

                break;
        }

        let obj = {
            color: colorInput,
            format: formatInput,
            code: codeInput
        };

        arr.push(obj);

        document.cookie = 'arr=' + JSON.stringify(arr) + ";max-age=10800";
    }
})

// 2 способ
function createNewBox(colorName, type, code) {
    let newDiv = document.createElement('div');
    newDiv.className = 'box';


    switch (type) {
        case 'RGB':
            newDiv.style.border = `50px solid rgb(${code})`;
            break;
        case 'RGBA':
            newDiv.style.border = `50px solid rgba(${code})`;
            break;
        case 'HEX':
            newDiv.style.border = `50px solid ${code}`;
            break;

        default:

            break;
    }

    let boxContent = document.createElement('div');
    boxContent.className = 'box-content';

    newDiv.append(boxContent);
    let span = document.createElement('span');
    span.innerText = colorName;
    let small = document.createElement('small');
    small.innerText = type;
    let b = document.createElement('b');
    b.innerText = code;
    boxContent.append(span)
    boxContent.append(small)
    boxContent.append(b)
    let items = document.querySelector('.items');
    items.append(newDiv);
}