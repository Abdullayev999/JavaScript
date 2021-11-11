// CRUD

let db;

export function initDatabase() {
    return new Promise((resolve, reject) => {
        let connection = indexedDB.open('contactList', 1);

        connection.onerror = function() {
            console.log('ERROR!'); 
            reject(new Error('Connection error!'));
        };
        
        connection.onsuccess = function() {
            console.log('Connected to database...'); 
            db = event.target.result;
            resolve();
        };
    
        connection.onupgradeneeded = function() {
            console.log('Database updated!'); 
            db = event.target.result;
            db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
        };
    });
}

export function addContact(contact) {
    let transaction = db.transaction('contacts', 'readwrite');
    let contacts = transaction.objectStore('contacts');
    let request = contacts.add(contact);
    request.onsuccess = function() {
        console.log('Added to database!'); 
    }
}

export function getAllContacts() {
    return new Promise((resolve, reject) => {
        let transaction = db.transaction('contacts', 'readonly');
        let contacts = transaction.objectStore('contacts');
        let request = contacts.getAll();
        request.onsuccess = function() {
            resolve(request.result);
        }
        request.onerror = function() {
            reject(new Error('Not found!'));
        }
    });
}

export function getContactById(id) {
    return new Promise((resolve, reject) => {
        let transaction = db.transaction('contacts', 'readonly');
        let contacts = transaction.objectStore('contacts');
        let request = contacts.get(+id);
        request.onsuccess = function() {
            resolve(request.result);
        }
        request.onerror = function() {
            reject(new Error('Not found!'));
        }
    });
}

export function removeContact(id) {

}

export function updateContact(contact) {
    
}