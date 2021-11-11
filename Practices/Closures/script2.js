(function() {
    var text = 'hello from js 2';


    function hello() {
        console.log(text);
    }

    window.hello = hello;
})();