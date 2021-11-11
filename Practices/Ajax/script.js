// // let xhr = new XMLHttpRequest();
// //default true asyinc
// //xhr.open('METHOD(GET,POST)','SSILKA KUDA',(FALSE/TRUE(IS ASCYINC)));
// // xhr.open('Post','https://api.github.com/users/Abdullayev999',false);
// // xhr.send(name);

// //Sincronniy sposob
// // xhr.open('GET', 'https://api.github.com/users/Abdullayev999', false);

// // xhr.send();
// // let data = JSON.parse(xhr.response);
// // console.log(data);


// //Async method
// // xhr.open('GET', 'https://api.github.com/users/Abdullayev999', true);

// // xhr.send();

// // //pri zaverwenii zaprosa
// // xhr.onloadend = function() {
// //     console.log(2);
// //     let data = JSON.parse(xhr.response);
// //     console.log(data);
// // }


// //pri zaqruzki kusocka dannix srabativaet
// // xhr.onload = function() {

// //     console.log(1);
// //     let data = JSON.parse(xhr.response);
// //     console.log(data);
// // }


// //pri zaverwenii polnoqo zaprosa srabativaet
// // xhr.onloadend = function() {
// //     console.log(2);
// //     let data = JSON.parse(xhr.response);
// //     console.log(data);
// // }

// ///////////////////////////////////////
// let url = 'https://api.github.com/users/Abdullayev999';

// function GetRequestAsync(url) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         //xhr.open('GET', url, true);// po defaultu true
//         xhr.open('GET', url);

//         xhr.onloadend = function() {
//             resolve(xhr.response);
//         }

//         xhr.onerror = function() {
//             reject(new Error(xhr.statusText));
//         }


//         xhr.send();
//     });
// };


// async function main() {
//     try {
//         let data = await GetRequestAsync(url);
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }


// main();


// /////////////////////////////////////////////


// let url = 'https://api.github.com/users/Abdullayev999';

// async function main() {
//     try {
//         //default method for fetch "GET";
//         let response = await fetch(url);
//         //let data = await response.text();
//         //let data = await response.blob();

//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }


// main();

// /////////////////////////////////////////////


// let url = 'https://api.github.com/users/Abdullayev999';

// async function main() {
//     try {
//         let response = await fetch(url);
//         let data = await response.json();

//        // let imgResponse = await fetch(data.avatar_url);
//        // let imgBlob = await imgResponse.blob();
//        // console.log(imgBlob);

//      } catch (error) {
//         console.error(error);
//     }
// }


// main();


/////////////////////////////////////////////


let url = 'https://api.github.com/users/Abdullayev999';

async function main() {
    try {
        let response = await fetch(url);
        let data = await response.json();

        let imgResponse = await fetch(data.avatar_url);
        let imgBlob = await imgResponse.blob();

        //vozrawaet ssilku (daet vremenniy sgenerirovanniy gid url)
        let imgUrl = URL.createObjectURL(imgBlob);
        console.log(imgResponse);
        console.log(imgBlob);



        //document.querySelector('#userPhoto').setAttribute('src', data.avatar_url);
        document.querySelector('#userPhoto').setAttribute('src', imgUrl);
    } catch (error) {
        console.error(error);
    }
}


main();