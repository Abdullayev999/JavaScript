let arrImages = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
]
let id;
let currentIndex = 0;

function renderRadios() {
    let htmlTemplate = $('#template').html()
    for (let i = 0; i < arrImages.length; i++) {
        let template = Handlebars.compile(htmlTemplate);
        let html = template({ val: i });
        $('.radios').append(html);
    }
    checkBlock();
}

renderRadios();
$('#currentImage').attr('src', arrImages[currentIndex]);


$('.imageRadio').click(function() {

    $('#currentImage').attr('src', arrImages[currentIndex]).stop().fadeToggle(-10);
    currentIndex = $(this).val();
    $('#currentImage').attr('src', arrImages[currentIndex]).fadeToggle(500);
    checkBlock();
})



$('#play').click(function() {
    if (currentIndex < arrImages.length - 1) {
        $(this).stop().fadeToggle(0);
        $('#pause').stop().fadeToggle(200);
        slideImages();
    }
})

$('#pause').click(function() {
    clearInterval(id);
    $(this).stop().fadeToggle(0);
    $('#play').stop().fadeToggle(200);
})


function slideImages() {
    id = setInterval(() => {
        if (currentIndex < arrImages.length - 1) {
            $(this).stop().fadeToggle(0).fadeToggle(80);
            $('#currentImage').attr('src', arrImages[currentIndex]).stop().fadeToggle(-10);
            currentIndex++;
            $('#currentImage').attr('src', arrImages[currentIndex]).fadeToggle(300);
            checkBlock();

        } else {
            $('#pause').stop().fadeToggle(0);
            $('#play').stop().fadeToggle(200);
            clearInterval(id);
        }
    }, 2000);
}


$('#last').click(function() {
    if (currentIndex < arrImages.length - 1) {
        //эффект нажатие на кнопку маргает если есть куда переходить
        $(this).stop().fadeToggle(0).fadeToggle(200);
        currentIndex = arrImages.length - 1;
        $('#currentImage').attr('src', arrImages[currentIndex]);
        checkBlock();


    }
});

$('#first').click(function() {
    if (currentIndex > 0) {
        //эффект нажатие на кнопку маргает если есть куда переходить
        $(this).stop().fadeToggle(0).fadeToggle(200);
        currentIndex = 0;
        $('#currentImage').attr('src', arrImages[currentIndex]);
        checkBlock();
    }
});

$('#next').click(function() {
    if (currentIndex < arrImages.length - 1) {
        $(this).stop().fadeToggle(0).fadeToggle(80);
        $('#currentImage').attr('src', arrImages[currentIndex]).stop().fadeToggle(-10);
        currentIndex++;
        $('#currentImage').attr('src', arrImages[currentIndex]).fadeToggle(300);
        checkBlock();

    }
});


$('#prev').click(function() {
    if (currentIndex > 0) {
        $(this).stop().fadeToggle(0).fadeToggle(80);
        $('#currentImage').attr('src', arrImages[currentIndex]).stop().animate({ width: 'toggle' }, 0);;
        currentIndex--;
        $('#currentImage').attr('src', arrImages[currentIndex]).animate({ width: 'toggle' }, 350);

        checkBlock();
    }
});

function checkBlock() {
    $(`.imageRadio`)[currentIndex].checked = true;

    if (currentIndex == arrImages.length - 1) {
        $('#last').css('border', 'none');
        $('#next').css('border', 'none');
        $('#play').css('border', 'none');
    } else {
        $('#last').css('border', '5px solid blue');
        $('#next').css('border', '5px solid blue');
        $('#play').css('border', '5px solid blue');
    }


    if (currentIndex == 0) {
        $('#first').css('border', 'none');
        $('#prev').css('border', 'none');
    } else {
        $('#first').css('border', '5px solid blue');
        $('#prev').css('border', '5px solid blue');
    }
}

$('#zoom').click(function() {
    $('.container').hide();
    $('.zoomImage').show();
    $('#zoomImage').attr('src', arrImages[currentIndex]);
});

$('#unzoom').click(function() {
    $('.container').show();
    $('.zoomImage').hide();
});