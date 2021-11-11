/**
 * Create new Contact
 * @param {for name Contact} name 
 * @param {for phone} phone 
 * @param {*} email 
 * @param {*} favorite 
 */
export function Contact(name = 'no name', phone = 12345, email = '', favorite = false) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.favorite = favorite;
}