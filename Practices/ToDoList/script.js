document.forms.ToDoForm.addEventListener('submit', function() {
    let item = document.createElement('li');
    item.innerHTML = document.forms.ToDoForm.title.value + '<i>❌</i>'; // '<i onclick="remove()">❌</i>';




    // item.addEventListener('click', function() {
    //     event.target.classList.add('done');
    // });
    document.forms.ToDoForm.reset();

    document.getElementById('tasks').append(item);
    event.preventDefault();
})




document.querySelector('#tasks').addEventListener('click', function() {
    if (event.target.tagName == 'LI') {
        event.target.classList.add('done');
    } else if (event.target.tagName == 'I') {
        event.target.parentElement.remove();

    }

})



// function remove() {
//     console.log('REMOVE');
// }
















// for (const li of document.querySelectorAll('#tasks > li')) {
//     li.addEventListener('click', function() {
//         event.target.classList.add('done');
//     });
// }