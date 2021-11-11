import * as omdbapi from "./movieApi.js";
localStorage.setItem('paqination', 1);



async function getMoviesByTitleAndType() {
    event.preventDefault();
    document.querySelector('.detailInfo').innerHTML = ' ';
    document.querySelector('#paginationList').innerHTML = ' ';
    document.querySelector('#listMovie').hidden = false;
    document.querySelector('#paginationList').hidden = false;
    let title = searchForm.title.value;
    let select = searchForm.typies;

    var type = select.options[select.selectedIndex].value;

    let data = await omdbapi.getOmdbApi(title, type);

    if (data.Response == 'True') {
        document.querySelector('.notFound').hidden = true;
        let countMovies = parseInt(data.totalResults);
        let countPage = Math.ceil(countMovies / 10);
        if (countPage >= 5) {
            renderPagination(1, 5);
        } else {
            renderPagination(1, countPage);
        }

        renderMovie(data.Search);
    } else {
        document.querySelector('#paginationList').innerHTML = ' ';
        document.querySelector('#listMovie').innerHTML = ' ';
        document.querySelector('.notFound').hidden = false;
    }
}

function renderPagination(start, end) {

    let list = document.querySelector('#paginationList');

    let templateHtml = document.querySelector('#templatePaqination').innerHTML;
    let template = Handlebars.compile(templateHtml);

    list.innerHTML = ' ';
    let number = parseInt(localStorage.getItem('paqination'));
    for (let i = start; i <= end; i++) {
        let html = template({ num: i });

        list.insertAdjacentHTML('beforeend', html);
    }

    for (const button of list.childNodes) {
        if (button.innerText == number) {
            button.classList.add('bg-success');
            button.classList.remove('bg-warning');
        }
    }
}

document.querySelector('#paginationList').addEventListener('click', function() {
    renderMovieByPage(event.target.innerText);
});

async function renderMovieByPage(page) {
    let title = searchForm.title.value;
    let select = searchForm.typies;

    var type = select.options[select.selectedIndex].value;

    let data = await omdbapi.getOmdbApi(title, type, page);

    if (data != null || data.Response == 'true') {
        document.querySelector('.notFound').hidden = true;
        document.querySelector('.detailInfo').hidden = true;
        let countMovies = parseInt(data.totalResults);
        let countPage = Math.ceil(countMovies / 10);


        //Для погинации
        let left = 3;
        let right = 5;

        let isLeft = false;
        let isRight = false;
        do {
            if (!isLeft && ((parseInt(page) - left) >= 1)) {
                isLeft = true;
            } else if (!isLeft) {
                left--;
            }

            if (!isRight && ((parseInt(page) + right) <= countPage)) {
                isRight = true;
            } else if (!isRight) {
                right--;
            }

            if (isLeft && isRight) {
                break;
            }
        } while (true);
        renderPagination((parseInt(page) - left), (parseInt(page) + right));
        renderMovie(data.Search);
    } else {
        document.querySelector('#listMovie').innerHTML = ' ';
        document.querySelector('.notFound').hidden = false;
    }
}




function renderMovie(movies) {
    let list = document.querySelector('#listMovie');

    let templateHtml = document.querySelector('#templateItem').innerHTML;
    let template = Handlebars.compile(templateHtml);

    list.innerHTML = ' ';
    for (const movie of movies) {
        let html = template(movie);
        list.insertAdjacentHTML('beforeend', html);
    }
}

async function readMovieInfo() {

    if (event.target.innerText == 'Detail') {
        let id = event.target.parentElement.lastElementChild.innerText;
        let data = await omdbapi.getMovieDetail(id);

        let info = document.querySelector('.detailInfo');

        let templateHtml = document.querySelector('#detailItem').innerHTML;
        let template = Handlebars.compile(templateHtml);

        info.innerHTML = ' ';
        let html = template(data);
        info.insertAdjacentHTML('beforeend', html);

        document.querySelector('.detailInfo').hidden = false;
        document.querySelector('#listMovie').hidden = true;
        document.querySelector('#paginationList').hidden = true;
        document.querySelector('.search').hidden = true;
    }
}

document.querySelector('#paginationList').addEventListener('click', function() {
    event.target.classList.add('bg-success');
    event.target.classList.remove('bg-warning');
    localStorage.setItem('paqination', event.target.innerText);
})

function backMovieInfo() {
    if (event.target.innerText == 'Back') {

        document.querySelector('.search').hidden = false;
        document.querySelector('.detailInfo').hidden = true;
        document.querySelector('#listMovie').hidden = false;
        document.querySelector('#paginationList').hidden = false;
    }
}

document.querySelector('#listMovie').addEventListener('click', readMovieInfo)
document.querySelector('.detailInfo').addEventListener('click', backMovieInfo)


let searchForm = document.forms.searchForm;

searchForm.addEventListener('submit', getMoviesByTitleAndType)