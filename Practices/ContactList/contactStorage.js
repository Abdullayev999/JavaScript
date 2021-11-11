let contacts = [];

export function loadContacts() {
    let jsonContacts = localStorage.getItem('contacts');
    if (jsonContacts) {
        contacts = JSON.parse(jsonContacts);
    }
}

export function addContact(contact) {
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

export function getAllContacts() {
    return contacts;
}

export function getContactById(id) {
    return contacts.find(x => x.id == id);
}