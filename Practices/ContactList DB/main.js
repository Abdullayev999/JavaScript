 import { Contact } from "./contact.js";
 import * as ContactStorage from './contactStorage.js';

 let contactForm = document.forms.contactForm;
 let contactTemplate = document.getElementById('contactTemplate').innerHTML;
 let contactList = document.getElementById('contactList');
 let contactDetailsTemplate = document.getElementById('contactDetailsTemplate'.innerHTML);



 async function onDocumentLoad() {
     await ContactStorage.initDb();
     let contacts = await ContactStorage.getAllContacts();

     for (const contact of contacts) {
         renderContact(contact);
     };

     //  ContactStorage.initDb(function() {
     //      ContactStorage.getAllContacts(function(data) {
     //          for (const contact of data) {
     //              renderContact(contact);
     //          }
     //      })
     //  });



 }

 async function onContactClick() {
     let id = event.target.dataset.id;

     if (id) {
         let contact = await ContactStorage.getContactById(id);
         renderContactDetailsInfo(contact);
         $('#contactModal').modal('show');
     }


 }

 contactList.addEventListener('click', onContactClick);

 function renderContactDetailsInfo(contact) {
     let template = Handlebars.compile(contactDetailsTemplate);
     let html = template(contact);
     document.getElementById('contactModalBody').innerHTML = ' ';
     document.getElementById('contactModalBody').insertAdjacentHTML('beforeend', html);
 }

 document.addEventListener('DOMContentLoaded', onDocumentLoad);

 function onContactFormSumbit() {
     event.preventDefault();
     // let contact = {
     //     id: Date.now(),
     //     fullname: contactForm.fullname.value,
     //     phone: contactForm.phone.value,
     //     email: contactForm.email.value,
     //     favorit: contactForm.favorite.checked
     // }

     let contact = new Contact(
         contactForm.fullname.value,
         contactForm.phone.value,
         contactForm.email.value,
         contactForm.favorite.checked);


     //console.log(contact);

     ContactStorage.addContact(contact);

     renderContact(contact);

     //console.log(html);
     contactForm.reset();

 };

 function renderContact(contact) {
     let template = Handlebars.compile(contactTemplate);
     let html = template(contact);

     contactList.insertAdjacentHTML('beforeend', html);
 }

 contactForm.addEventListener('submit', onContactFormSumbit);