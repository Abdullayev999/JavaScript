// let dbConnection = indexedDB.open("contactList", 1);

// //Pri uspewnom podklyucenie db
// dbConnection.onsuccess = function() {
//     console.log("SUCCESS");
// }

// //Pri owibki podklyuceniya
// dbConnection.onerror = function() {
//     console.log("ERROR");
// }

// //pri podklyuceni k staroy versii ili je
// // toy db kotoroy entu
// //default povednie sozdaet db
// //zdes propisivaetsa nastroyki db
// dbConnection.onupgradeneeded = function() {
//     console.log("UPGRADENEEDED");
//     // console.log(event.target);

//     let db = event.target.result;

//     db.createObjectStore('contacts')
// }

// //Esli bd zaneto druqim processom
// db.addEventListener('blocked',function() {

// })




//---------------


// let dbConnection = indexedDB.open("contactList", 1);

// dbConnection.onsuccess = function() {
//     console.log("SUCCESS");
//     let db = event.target.result;

//     //s kakoy bd budem rabotat

//     //db.transaction(['contacts','druqayaTablica'])

//     //obraüenie po cteniyu
//     //znacenie po default
//     // db.transaction('contacts','readonly')

//     //CREATE UPDATE DELETE
//     // db.transaction('contacts','readwrite')


//     //aftomaticeski zakrivaetsa
//     let transaction = db.transaction('contacts', 'readwrite');

//     //s kakoy tablici was budu rabotat
//     let contacts = transaction.objectStore('contacts');
//     //contacts.add({ name: "Farid", age: 25, id: Date.now() }, 1);
//     contacts.add({ name: "Farid", age: 25, id: Date.now() }, 2);


// }

// dbConnection.onerror = function() {
//     console.log("ERROR");
// }

// //dobavlenie izminenie tablici
// dbConnection.onupgradeneeded = function() {

//     let db = event.target.result;
//     //Sozdanie tablici
//     db.createObjectStore('contacts')
// }


//////////////////////////////////////////////////


function getName(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let dbConnection = indexedDB.open("contactList", 1);

dbConnection.onsuccess = function() {
    console.log("SUCCESS");
    let db = event.target.result;


    //CREATE
    // let transaction = db.transaction('contacts', 'readwrite');
    // let contacts = transaction.objectStore('contacts');
    // for (let index = 0; index < 10; index++) {
    //     contacts.add({ name: getName(getRnd(5, 10)), age: getRnd(10, 100) });

    // }
    //contacts.add({ name: "Farid", age: 25 });

    //READ All
    // let transaction = db.transaction('contacts', 'readonly');
    // let contacts = transaction.objectStore('contacts');
    // let request = contacts.getAll();

    // //ploxoy variant
    // // setTimeout(() => {
    // //     console.log(request.result);
    // // }, 2000);

    // request.onsuccess = function() {
    //     console.log(request.result);
    // }

    //Read BY KEY
    // let transaction = db.transaction('contacts', 'readonly');
    // let contacts = transaction.objectStore('contacts');

    // //DIAPAZON POISKA
    // // let request = contacts.getAll(IDBKeyRange.bound(1, 4));

    // //kONKRETNIY KEY
    // let request = contacts.getAll(1);
    // request.onsuccess = function() {
    //     console.log(request.result);
    // }


    //Delete
    // let transaction = db.transaction('contacts', 'readwrite');
    // let contacts = transaction.objectStore('contacts');

    // let request = contacts.delete(1);
    // request.onsuccess = function() {
    //     console.log(request.result);
    // }


    //Update
    let transaction = db.transaction('contacts', 'readwrite');
    let contacts = transaction.objectStore('contacts');

    let request = contacts.get(3);
    request.onsuccess = function() {
        let obj = request.result;
        obj.name = "Farid";
        contacts.put(obj);
    }

}

dbConnection.onerror = function() {
    console.log("ERROR");
}


dbConnection.onupgradeneeded = function() {

    let db = event.target.result;
    db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true })
}