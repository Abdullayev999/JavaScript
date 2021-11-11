// async function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;

//     document.body.append(script);
// }

// console.log("Start time : " + Date.now());

// console.log("Load script start time : " + Date.now());
// loadScript("one.js")
// console.log("Load script end time : " + Date.now());

// console.log("Func One time : " + Date.now());
// setTimeout(() => {
//     one();
// }, 500);


// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;

//     document.body.append(script);
// }

// console.log("Start time : " + Date.now());

// console.log("Load script start time : " + Date.now());
// loadScript("one.js")
// console.log("Load script end time : " + Date.now());

// console.log("Func One time : " + Date.now());
// setTimeout(() => {
//     one();
// }, 500);



// /////////////////////////////////////////////////////////


// function loadScript(src, callBack) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = function() {
//         console.log("Script loaded :" + Date.now());
//         callBack();
//     }

//     script.onerror = function() {
//         console.log("Script not found!! error");
//     }
//     document.body.append(script);
// }



// console.log("Load script start time : " + Date.now());
// loadScript("one.js", function() {
//     one();
// })
// console.log("Load script end time : " + Date.now());

// /////////////////////////////////////////////////////////


// function loadScript(src, callBack) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = function() {
//         console.log("Script loaded :" + Date.now());
//         callBack();
//     }

//     script.onerror = function() {
//         //console.log("Script not found!! error");
//         callBack(new Error("Not found"));
//     }
//     document.body.append(script);
// }

// // //GOVORIT NA KAKOY STROCKE OWIBKA I KRASNIAYA PODSVETLA
// // new Error("Not found")

// // // PODSVECIVAET KRASNIM SINTAKSISOM
// // console.error(error); 


// console.log("Load script start time : " + Date.now());
// loadScript("on.js", function(error) {
//     if (error) {
//         console.error(error);
//     } else {
//         one();
//     }

// })
// console.log("Load script end time : " + Date.now());



// /////////////////////////////////////////////////////////


// function loadScript(src, callBack) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = function() {
//         console.log("Script loaded :" + Date.now());
//         callBack();
//     }

//     script.onerror = function() {
//         //console.log("Script not found!! error");
//         callBack(new Error("Not found"));
//     }
//     document.body.append(script);
// }



// //Rabotaet no qramozdkiy kod
// loadScript("one.js", function() {
//     one();
//     loadScript("two.js", function() {
//         two();
//         loadScript("three.js", function() {
//             three();
//         });
//     });
// });


// /////////////////////////////////////////////////////////


// let scriptLoaded = new Event("scriptLoaded")

// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = function() {
//         console.log("Script loaded");
//         document.dispatchEvent(scriptLoaded);
//     }

//     script.onerror = function() {}
//     document.body.append(script);
// }

// loadScript("one.js");
// document.addEventListener('scriptLoaded', function() {

//     one();
// })









// /////////////////////////////////////////////////////////


// // promise.then
// // promise.catch
// // promise.finally


// // let promise = new Promise(function(resolve, reject) {
// //     resolve('DONE');
// //     //reject("Error");
// // })

// console.log("Start time : " + Date.now());
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve('DONE : ' + Date.now());
//     }, 500);
//     //reject("Error");
// });

// promise.then(function(result) {
//     console.log(1);
//     console.log(result);
// }, function(error) {
//     console.log(2);
//     console.error(error);
// }) 



/////////////////////////////////////////////////////////
//XOROWIE VARINANTI!!!!!!!!!!!!!!!!!!!!!!!!!


// console.log("Start time : " + Date.now());
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve('DONE : ' + Date.now());
//     }, 500);
//     //reject("Error");
// });




// promise.then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.error(error);
// });
//=========

// promise.then(
//     result => console.log(result),
//     error => console.error(error)
// )//=========

//=========
// promise
//     .then(result => console.log(result))
//     .catch(error => console.error(error))
//     .finally(() => console.log('Nezavisimo ot rezultata'));



// /////////////////////////////////////////////////////////////////
// //XOROWIY VARIANT
// function loadScriptAsync(src) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let script = document.createElement('script');
//             script.src = src;

//             script.onload = function() {
//                 console.log("Script loaded :" + Date.now());
//                 resolve(src);
//             }

//             script.onerror = function() {
//                 console.log("Script not found!! error");
//                 reject(new Error("Not Found"));
//             }
//             document.body.append(script);
//         }, 3000);
//     })
// };


// // loadScriptAsync("one.js").then(result => one());
// // loadScriptAsync("two.js").then(result => two());
// // loadScriptAsync("three.js").then(result => three());

// //Rawno ========

// // loadScriptAsync("one.js")
// //     .then(result => one())
// //     .catch(error => console.error(error));

// // loadScriptAsync("two.js")
// //     .then(result => two())
// //     .catch(error => console.error(error));

// // loadScriptAsync("three.js")
// //     .then(result => three())
// //     .catch(error => console.error(error));



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


//XOROWIY VARIANT
// function loadScriptAsync(src) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             let script = document.createElement('script');
//             script.src = src;

//             script.onload = function() {
//                 console.log("Script loaded :" + Date.now());
//                 resolve(src);
//             }

//             script.onerror = function() {
//                 console.log("Script not found!! error");
//                 reject(new Error("Not Found"));
//             }
//             document.body.append(script);
//         }, 500);
//     })
// };

// loadScriptAsync("one.js").then(result => {
//     one();
//     return loadScriptAsync("two.js").then(result => {
//         two();
//         return loadScriptAsync("three.js").then(result => {
//             three();
//         });
//     });
// });

//Rowno============================
//LUCHIY VARIANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
// loadScriptAsync("one.js").then(result => {
//     one();
//     return loadScriptAsync("two.js");
// }).then(result => {
//     console.log(result);
//     two();
//     return loadScriptAsync("three.js");
// }).then(result => {
//     three();
// }).catch(error => { // obwiy dlya vsex
//     console.log(error);
// });

//BEST VARIANT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//POLUCAEM VSE REZULTATI
// Promise.all([
//     loadScriptAsync("one.js"),
//     loadScriptAsync("two.js"),
//     loadScriptAsync("three.js")
// ]).then(results => {
//     // one();
//     // two();
//     // three();

//     for (const result of results) {
//         console.log(result);
//     }
// });


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//POLUCAEM PERVIY VIPOLNENIY REZULTAT
// Promise.race([
//     loadScriptAsync("one.js"),
//     loadScriptAsync("two.js"),
//     loadScriptAsync("three.js")
// ]).then(result => {
//     // one();
//     // two();
//     // three();
//     console.log(result);
//     // for (const result of results) {
//     //     console.log(result);
//     // }
// });




//////////////////////////////////////////////////////////////////////

function loadScriptAsync(src) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            let script = document.createElement('script');
            script.src = src;

            script.onload = function() {
                console.log("Script loaded :" + Date.now());
                resolve(src);
            }

            script.onerror = function() {
                console.log("Script not found!! error");
                reject(new Error("Not Found"));
            }
            document.body.append(script);
        }, 500);
    })
};



// async function main() {
//     try {
//         await loadScriptAsync("one.js");
//         one();
//         await loadScriptAsync("two.js");
//         two();
//         await loadScriptAsync("three.js");
//         three();
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();



// async function main() {
//     try {
//         let results = await Promise.all([
//             loadScriptAsync("one.js"),
//             loadScriptAsync("two.js"),
//             loadScriptAsync("three.js")
//         ]);

//         for (const result of results) {
//             console.log(result);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// main();



async function main() {
    try {
        let result1 = await loadScriptAsync("one.js");
        console.log(result1);
        one();
        await loadScriptAsync("two.js");
        two();
        await loadScriptAsync("three.js");
        three();
    } catch (error) {
        console.error(error);
    }
}

main();