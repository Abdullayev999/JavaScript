// import { Contact } from './contact.js'
// import * as ContactStorage from './contactsStorage.js'; 

// let contactForm = document.forms.contactForm;
// let contactTemplate = document.getElementById('contactTemplate').innerHTML;
// let contactDetailsTemplate = document.getElementById('contactDetailsTemplate').innerHTML;
// let contactList = document.getElementById('contactList');

// async function onDocumentLoad() {
    // await ContactStorage.initDatabase();
    // let contacts = await ContactStorage.getAllContacts();
    // for (const item of contacts) {
        // renderContact(item);
    // }
// }

// function onContactFormSubmit() {
	 // event.preventDefault();
    // let contact = new Contact(
        // contactForm.fullname.value, 
        // contactForm.phone.value, 
        // contactForm.email.value, 
        // contactForm.favorite.checked);
        
    // ContactStorage.addContact(contact);
    // renderContact(contact);

    // contactForm.reset();
   
// }

// async function onContactClick() {
    // let id = event.target.dataset.id;
    // if (id) {
        // console.log(id);
        
        // let contact = await ContactStorage.getContactById(id);
        // renderContactDetails(contact);
        // $('#contactModal').modal('show');
        // console.log(contact);
    // }
// }

// function renderContact(contact) {
    // var template = Handlebars.compile(contactTemplate);
    // var html = template(contact);
    // contactList.insertAdjacentHTML('beforeend', html);
// }

// function renderContactDetails(contact) {
    // var template = Handlebars.compile(contactDetailsTemplate);
    // var html = template(contact);
    // document.getElementById('contactModalBody').innerHTML = '';
    // document.getElementById('contactModalBody').insertAdjacentHTML('beforeend', html);
// }


// contactForm.addEventListener('submit', onContactFormSubmit);
// document.addEventListener('DOMContentLoaded', onDocumentLoad);
// contactList.addEventListener('click', onContactClick);


















import { Contact } from './contact.js'
import * as ContactStorage from './contactsStorage.js'; 

let contactForm = document.forms.contactForm;
let contactTemplate = document.getElementById('contactTemplate').innerHTML;
let contactDetailsTemplate = document.getElementById('contactDetailsTemplate').innerHTML;
let contactList = document.getElementById('contactList');

function onDocumentLoad() {
    ContactStorage.initDatabase(function() {
        ContactStorage.getAllContacts(function(data) {
            for (const item of data) {
                renderContact(item);
            }
        });
    });
}

function onContactFormSubmit() {
    let contact = new Contact(
        contactForm.fullname.value, 
        contactForm.phone.value, 
        contactForm.email.value, 
        contactForm.favorite.checked);
        
    ContactStorage.addContact(contact);
    renderContact(contact);

    contactForm.reset();
    event.preventDefault();
}

function onContactClick() {
    let id = event.target.dataset.id;
    if (id) {
        console.log(id);
        
        ContactStorage.getContactById(id, function(data) {
            renderContactDetails(data);
            $('#contactModal').modal('show');
            console.log(data);
        });
    }
}

function renderContact(contact) {
    var template = Handlebars.compile(contactTemplate);
    var html = template(contact);
    contactList.insertAdjacentHTML('beforeend', html);
}

function renderContactDetails(contact) {
    var template = Handlebars.compile(contactDetailsTemplate);
    var html = template(contact);
    document.getElementById('contactModalBody').innerHTML = '';
    document.getElementById('contactModalBody').insertAdjacentHTML('beforeend', html);
}


contactForm.addEventListener('submit', onContactFormSubmit);
document.addEventListener('DOMContentLoaded', onDocumentLoad);
contactList.addEventListener('click', onContactClick);