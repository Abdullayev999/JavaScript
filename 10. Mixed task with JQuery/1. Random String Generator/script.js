$('#myForm').submit(function(e) {
    e.preventDefault();

    let count = $('#count').val();

    let number = $('#isNumber').is(':checked');
    let upper = $('#isUpper').is(':checked');
    let lower = $('#isLower').is(':checked');

    if (count && (number || upper || lower)) {
        let str = generationString(count, number, upper, lower);
        $('#result').text(str);
    }
});

function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generationString(count, isNumber, isUpper, isLower) {
    let str = '';
    let lower = 'qwertyuioplkjhgfdsazxcvbnm';
    let upper = lower.toUpperCase();
    let number = '1234567890';

    for (let i = 0; i < count;) {
        let random = Random(0, 3);

        if (random == 0 && isNumber) {
            str += number.charAt(Random(0, number.length));
            i++
        } else if (random == 1 && isUpper) {
            str += upper.charAt(Random(0, upper.length));
            i++
        } else if (random == 2 && isLower) {
            str += lower.charAt(Random(0, lower.length));
            i++
        }
    }
    return str;
}