import { openDB, deleteDB, wrap, unwrap } from 'https://unpkg.com/idb?module';

async function main() {
    let db = await openDB('contactList', 1)
    let store = db.transaction('contacts', 'readonly').objectStore('contacts');

    let contacts = await store.getAll();
    for (const item of contacts) {
        console.log(item);
    }
}

main();