// $('#cities .header').click(function(e) {
//     e.preventDefault();
//     // console.log(1);
//     // console.log($(this).text());


//     //next      - sosedniy element
//     //nextAll   - vse sosedi
//     //nextUntil(do opredelennoqo elementa) 

//     //$(this).next().slideToggle();
//     //$(this).nextAll().slideToggle();
//     //$(this).nextUntil('.header').slideToggle(); // do header

//     // $(this).prev().slideToggle();
//     // $(this).prevAll().slideToggle();
//     // $(this).prevUntil().slideToggle();

//     //$(this).parent().slideToggle();
//     //$(this).parents().slideToggle();

//     //$('#cities').children().slideToggle();//naxodit tolko detey
//     //$('#cities').find('.description').slideToggle();


// });



// ////////////////////////////////////////////////////////////////

// $('#citySearch').submit(function(e) {
//     e.preventDefault();

//     let name = $('#cityName').val();

//     $('#cities .elem:first')
//         .clone(true, true)
//         .appendTo('#cities')
//         .find('.header label')
//         .text(name);

// });

// $('#cities .header').click(function(e) {
//     e.preventDefault();
//     $('#cities .description')
//         .not($(this).next())
//         .slideUp();

//     $('#cities .header')
//         .not(this)
//         .find('i')
//         .removeClass('fa-minus-square')
//         .addClass('fa-plus-square');

//     $(this).next().slideToggle();

//     $(this).find('i')
//         .toggleClass('fa-plus-square')
//         .toggleClass('fa-minus-square');
// });






// ////////////////////////////////////////////////////////////////



// $('#citySearch').submit(function(e) {
//     e.preventDefault();

//     let name = $('#cityName').val();
//     let templateHtml = $('#cityElem').html();
//     $('#cities').append(templateHtml);
// });


// //boleye pravilno ya povesil ne na konkretnoqo rebyonka a na vsex detey
// $('#cities').on('click', '.header', function(e) {
//     e.preventDefault();
//     $('#cities .description')
//         .not($(this).next())
//         .slideUp();

//     $('#cities .header')
//         .not(this)
//         .find('i')
//         .removeClass('fa-minus-square')
//         .addClass('fa-plus-square');

//     $(this).next().slideToggle();

//     $(this).find('i')
//         .toggleClass('fa-plus-square')
//         .toggleClass('fa-minus-square');

//     // $('#cities').off('click'); //snatie eventa
// });



////////////////////////////////////////////////////////////////

const apiKey = '4d2ca4e6e3142073d2038dc0c5947677';

function renderCity(data) {
    let templateHtml = $('#cityElem').html();
    let template = Handlebars.compile(templateHtml);
    let result = template(data);
    $('#cities').append(result);
}


function addMap(elem, coords) {
    map = new google.maps.Map(elem, {
        center: {
            lat: coords.lat,
            lng: coords.lon
        },
        zoom: 11
    });
}

$('#citySearch').submit(async function(e) {
    e.preventDefault();
    let name = $('#cityName').val();

    // $.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`)
    //     .done(function(data) {
    //         console.log(data);
    //     })
    //     .fail(function() {
    //         console.log('Fail');
    //     });

    try {
        let data = await $.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${apiKey}`).promise();
        console.log(data);
        renderCity(data);
        addMap($('.map:last')[0], data.coord);
    } catch (error) {
        console.log('City not found!!!');
    }


});



//boleye pravilno ya povesil ne na konkretnoqo rebyonka a na vsex detey
$('#cities').on('click', '.header', function(e) {
    e.preventDefault();
    $('#cities .description')
        .not($(this).next())
        .slideUp();

    $('#cities .header')
        .not(this)
        .find('i')
        .removeClass('fa-minus-square')
        .addClass('fa-plus-square');

    $(this).next().slideToggle();

    $(this).find('i')
        .toggleClass('fa-plus-square')
        .toggleClass('fa-minus-square');

    // $('#cities').off('click'); //snatie eventa
});


$('form').draggable().resizable();