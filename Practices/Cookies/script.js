//  document.addEventListener('DOMContentLoaded', function() {
//      //      
//      //     let theme = document.cookie.split("=")[1];
//      //     if (theme && theme == 'Dark') {
//      //         document.body.classList.remove('light-theme');
//      //         document.body.classList.add('dark-theme');
//      //     } else if (theme && theme == 'Light') {
//      //         document.body.classList.add('light-theme');
//      //         document.body.classList.remove('dark-theme');
//      //     }
//      changeTheme();
//  })



//  document.querySelector('.lightButton').addEventListener('click', function() {
//      //console.log(new Date(1635945871000).toUTCString());

//      //cerez skolko vremeni udali coocie bolee obüirnoe
//      // document.cookie = "theme=Light; expires=" + new Date(1635945871000).toUTCString() + ";";

//      //cerez skolko sekund udalit cookie
//      // document.cookie = "theme=Light;max-age=3600";

//      //unictojti cookie ne soxranyat
//      //document.cookie = "theme=Light;max-age=-1";

//      //default path
//      //document.cookie = "theme=Light;path=/";
//      document.cookie = "theme=Light;";
//      //location.reload();
//      changeTheme();
//  });

//  document.querySelector('.darkButton').addEventListener('click', function() {
//      document.cookie = 'theme=Dark;';
//      // location.reload();
//      changeTheme();
//  });


//  function changeTheme() {
//      let theme = document.cookie.split("=")[1];
//      if (theme && theme == 'Dark') {
//          document.body.classList.remove('light-theme');
//          document.body.classList.add('dark-theme');
//      } else if (theme && theme == 'Light') {
//          document.body.classList.add('light-theme');
//          document.body.classList.remove('dark-theme');
//      }
//  }




document.addEventListener('DOMContentLoaded', function() {
    //      
    //     let theme = document.cookie.split("=")[1];
    //     if (theme && theme == 'Dark') {
    //         document.body.classList.remove('light-theme');
    //         document.body.classList.add('dark-theme');
    //     } else if (theme && theme == 'Light') {
    //         document.body.classList.add('light-theme');
    //         document.body.classList.remove('dark-theme');
    //     }
    changeTheme();
})



document.querySelector('.lightButton').addEventListener('click', function() {
    setCookie('theme', 'Light');
    changeTheme();
});

document.querySelector('.darkButton').addEventListener('click', function() {
    setCookie('theme', 'Dark');
    changeTheme();
});


function changeTheme() {
    if (getCookie('theme') == 'Dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else if (getCookie('theme') == 'Light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}