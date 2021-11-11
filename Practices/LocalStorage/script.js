document.addEventListener('DOMContentLoaded', function() {
    changeTheme();

    let user = localStorage.getItem('user');
    if (user) {
        user = JSON.parse(user);
        document.forms.EnterForm.hidden = true;
        document.getElementById('welcome').hidden = false;
        document.querySelector('#welcome h1').innerText = user.name;
        document.querySelector('#welcome h3').innerText = user.age;
    }

    let json = localStorage.getItem('tasks');
    if (json) {
        tasks = JSON.parse(json);
        for (const task of tasks) {
            DrawTask(task);
        }
    }
})



document.querySelector('.lightButton').addEventListener('click', function() {
    localStorage.setItem('theme', 'Light')
    changeTheme();
});

document.querySelector('.darkButton').addEventListener('click', function() {
    localStorage.setItem('theme', 'Dark')
    changeTheme();
});


let tasks = [];


function changeTheme() {
    if (localStorage.getItem('theme') == 'Dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else if (localStorage.getItem('theme') == 'Light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}


document.forms.EnterForm.addEventListener('submit', function() {
    event.preventDefault();
    var user = {
        name: document.forms.EnterForm.name.value,
        age: document.forms.EnterForm.age.value
    }

    localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
})



document.forms.todoForm.addEventListener('submit', function() {

    let toDo = {
        id: Date.now(),
        title: document.forms.todoForm.title.value
    };
    DrawTask(toDo);

    tasks.push(toDo);
    console.log(toDo);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.forms.todoForm.reset(); //aftomaticeski ociwaet


    event.preventDefault();
})

function DrawTask(task) {
    let item = document.createElement('li');
    item.innerHTML = task.title + '<i >❌</i>';
    item.dataset.id = task.id;
    document.getElementById('tasks').append(item);
}


document.querySelector('#tasks').addEventListener('click', function() {
    if (event.target.tagName == 'LI') {
        event.target.classList.add('done');
    } else if (event.target.tagName == 'I') {
        let id = event.target.parentElement.dataset.id;
        tasks = tasks.filter(x => x.id != id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        event.target.parentElement.remove();
    }
})