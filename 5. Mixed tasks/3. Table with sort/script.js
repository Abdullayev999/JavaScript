function ReadTable() {
    let arr = [];
    let trs = document.querySelectorAll('tr');
    for (let i = 1; i < trs.length; i++) {
        let textArr = trs[i].innerText.split('\t');
        let obj = {};
        obj.firstname = textArr[0];
        obj.lastname = textArr[1];
        obj.age = textArr[2];
        obj.company = textArr[3];

        arr.push(obj);
    }
    return arr;
}

function FillTable(arr) {
    let tbody = document.querySelector('#tableBody');
    tbody.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let htmlTemplate = document.querySelector('#template').innerHTML;
        let template = Handlebars.compile(htmlTemplate);


        let html = template({
            firstname: arr[i].firstname,
            lastname: arr[i].lastname,
            age: arr[i].age,
            company: arr[i].company
        })

        tbody.insertAdjacentHTML('beforeend', html);
    }
}


function SortFirstName(a, b) {
    if (a.firstname > b.firstname) {
        return 1;
    }
    if (a.firstname < b.firstname) {
        return -1;
    }
    return 0;
}

function SortLastName(a, b) {
    if (a.lastname > b.lastname) {
        return 1;
    }
    if (a.lastname < b.lastname) {
        return -1;
    }
    return 0;
}

function SortCompany(a, b) {
    if (a.company > b.company) {
        return 1;
    }
    if (a.company < b.company) {
        return -1;
    }
    return 0;
}

function SortAge(a, b) {
    return a.age - b.age;
}





let th = document.querySelectorAll('thead th');
for (const iterator of th) {
    iterator.addEventListener('click', function() {
        let arr = ReadTable();
        switch (event.target.innerText) {
            case 'Firstname':
                arr.sort(SortFirstName);
                break;
            case 'Lastname':
                arr.sort(SortLastName);
                break;
            case 'Age':
                arr.sort(SortAge);
                break;
            case 'Company':
                arr.sort(SortCompany);
                break;
            default:
                break;
        }

        FillTable(arr);
    })
}