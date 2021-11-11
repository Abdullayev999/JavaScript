let body = document.querySelector('body');

body.addEventListener('contextmenu', function() {
    //T.E. PRI NAJATII NA CTO POYAVLYALSYA CONTEXTMENYU
    if (event.target.tagName == 'DIV') {
        let menu = document.querySelector('#contextMenyu');
        menu.style.display = 'block';
        menu.style.top = event.clientY + 'px';
        menu.style.left = event.clientX + 'px';
        event.preventDefault();
    }
})



body.addEventListener('click', function() {
    console.log(111);
    let menu = document.querySelector('#contextMenyu');
    menu.style.display = 'none';
    event.preventDefault();
})