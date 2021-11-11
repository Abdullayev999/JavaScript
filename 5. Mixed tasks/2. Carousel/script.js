let imgs = ['./cat1.jpeg', './cat2.jpg', './cat.jpg'];
let currentIndex = 1;

let rightBtn = document.querySelector('.right');
let leftBtn = document.querySelector('.left');

rightBtn.addEventListener('click', function() {
    if (currentIndex < imgs.length - 1) {
        let img = document.querySelector('img');
        img.src = imgs[++currentIndex];
        leftBtn.disabled = false;
        if (currentIndex == imgs.length - 1) {
            rightBtn.disabled = true;
        }
    }
})



leftBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
        let img = document.querySelector('img');
        img.src = imgs[--currentIndex];
        rightBtn.disabled = false;
        if (currentIndex == 0) {
            leftBtn.disabled = true;
        }
    }
})