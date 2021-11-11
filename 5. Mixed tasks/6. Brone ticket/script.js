// доп переменные
let arrPlaces = [];
let arrPlaces2 = [];
let arrPlaces3 = [];
let arr = null;
const ticketCost = 62;
let sum = 0;
let buyIndex = [];
let valueRoute = '';
let valueDate = '';
let inProccesBuy = 0;
let index = 0;

//создание объекта
function createObj(route, date, arrPlaces) {
    let obj = {};
    obj.route = route;
    obj.date = date;
    obj.arrPlaces = arrPlaces;
    return obj;
}

//создание массива мест
function createPlaces(isBusy, num) {
    let obj = {};
    obj.isBusy = isBusy;
    obj.num = num;
    return obj;
}


//При выборе мест фиксировать их количество цену и т.д 
function Disable() {

    let costLabel = document.querySelector('.cost');

    let num = parseInt(event.target.name);
    if (arr.arrPlaces[num].isBusy) {
        sum -= ticketCost;
        arr.arrPlaces[num].isBusy = false;
        inProccesBuy--;
        for (var i = 0; i < buyIndex.length; i++) {
            if (buyIndex[i] === num) {
                buyIndex.splice(i, 1);
            }
        }
    } else {
        inProccesBuy++;
        sum += ticketCost;
        buyIndex.push(num);
        arr.arrPlaces[num].isBusy = true;
    }

    if (inProccesBuy > 0) {
        costLabel.hidden = false;
        document.querySelector('.book').hidden = false;
    } else {
        document.querySelector('.book').hidden = true;
        costLabel.hidden = true;
    }
    document.getElementById("ticket").hidden = true;
    costLabel.innerText = `Total price: ${sum}$`;
}

//заполнять фактическое састояние мест
function fillPlace(arr) {
    sum = 0;
    let calendar = document.querySelector('.places');

    calendar.innerHTML = '';
    for (let i = 0; i < arr.arrPlaces.length; i++) {
        if (arr.arrPlaces[i].isBusy) {
            calendar.insertAdjacentHTML('beforeend',
                `<label><input type="checkbox" onclick="Disable()" disabled checked name="${i}num" value="${arr.arrPlaces[i].isBusy}">${arr.arrPlaces[i].num}</label>`
            )
        } else {
            calendar.insertAdjacentHTML('beforeend',
                `<label><input type="checkbox" onclick="Disable()" name="${i}num" value="${arr.arrPlaces[i].isBusy}">${arr.arrPlaces[i].num}</label>`
            )
        }
    }
}



//создание мест
for (let i = 1; i < 27; i++) {
    arrPlaces.push(createPlaces(false, i))
    arrPlaces2.push(createPlaces(false, i))
    arrPlaces3.push(createPlaces(false, i))
}

//создание авиа-рейсов (в данном примере 3 рейса)
let arrRoutes = [
    createObj("Baku-London", '24.11.2021', arrPlaces),
    createObj("Baku-Moscow", '17.11.2021', arrPlaces2),
    createObj("Baku-Odessa", '05.11.2021', arrPlaces3)
];



//нахожждение рейса по направлению и времени
function searchRoute(valueRoute, valueDate) {
    for (let place of arrRoutes) {
        if (place.date == valueDate && place.route == valueRoute) {
            return place;
        }
        index++;
    }
}


document.forms.searchForm.addEventListener('submit', function() {
    event.preventDefault();
    if (inProccesBuy > 0) {
        for (const num of buyIndex) {
            arr.arrPlaces[num].isBusy = false;
        }
    }
    document.querySelector('.book').hidden = true;
    document.querySelector('.cost').hidden = true;
    inProccesBuy = 0;
    sum = 0;
    document.getElementById("ticket").hidden = true;
    arr = [];
    buyIndex = [];
    let elementRoute = document.getElementById("route");
    valueRoute = elementRoute.options[elementRoute.selectedIndex].value;

    let elementDate = document.getElementById("date");
    valueDate = elementDate.options[elementDate.selectedIndex].value;

    arr = searchRoute(valueRoute, valueDate);
    if (arr) {
        buyIndex = [];
        fillPlace(arr);
        document.getElementById('notData').hidden = true;
        document.getElementById('content').hidden = false;

    } else {
        document.getElementById('content').hidden = true;
        document.getElementById('notData').hidden = false;
    }
})



document.forms.buyPlace.addEventListener('submit', function() {
    event.preventDefault();
    if (inProccesBuy > 0) {
        inProccesBuy = 0;
        arrRoutes[index] = arr;
        fillPlace(arr);

        document.getElementById("ticket").hidden = false;

        document.getElementById("contentTable").innerHTML = ' ';
        for (const num of buyIndex) {
            document.querySelector("tbody").insertAdjacentHTML('afterbegin',
                `<tr>
        <td>${valueRoute}</td>
        <td>${valueDate}</td>
        <td>${num+1}</td>
        </tr>`
            );
        }
        buyIndex = [];
    }
})