// document.forms.todoForm.addEventListener('submit', function() {
//     let item = document.createElement('li');
//     item.innerText = document.forms.todoForm.title.value;

//     item.addEventListener('click', function() {
//         event.target.classList.add('done');
//     });
//     document.forms.todoForm.reset(); //aftomaticeski ociwaet

//     document.getElementById('tasks').append(item);
//     event.preventDefault();
// })


// for (const li of document.querySelectorAll('#tasks > li')) {
//     li.addEventListener('click', function() {
//         event.target.classList.add('done');
//     })
// }


document.forms.todoForm.addEventListener('submit', function() {
    let item = document.createElement('li');
    item.innerHTML = document.forms.todoForm.title.value + '<i onclick="remove()">❌</i>';
    document.forms.todoForm.reset(); //aftomaticeski ociwaet

    document.getElementById('tasks').append(item);
    event.preventDefault();
})


document.querySelector('#tasks').addEventListener('click', function() {
    if (event.target.tagName == 'LI') {
        event.target.classList.add('done');
    } else if (event.target.tagName == 'I') {
        remove();
    }
})

function remove() {
    event.target.parentElement.remove();
}