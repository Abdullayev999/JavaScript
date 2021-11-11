alert("Game Viktorina");
let name = prompt("Enter name : ");
let age = parseInt(prompt(`Please ${name} enter your age : `));
const ageMin = 18;

let questions = [{
        text: "Verno li utverjdenie 2 + 2 = 4 ?",
        isCorrect: true
    },
    {
        text: "Verno li utverjdenie 2 + 2 = 5 ?",
        isCorrect: false
    },
    {
        text: "Verno li utverjdenie 2 + 4 = 4 ?",
        isCorrect: false
    },
    {
        text: "Verno li utverjdenie 2 + 4 = 6 ?",
        isCorrect: true
    },
    {
        text: "Verno li utverjdenie 2 + 2 = 0 ?",
        isCorrect: false
    }
]

if (age >= ageMin) {

    let answers = [];
    for (let i = 0; i < questions.length; i++) {
        answers[i] = confirm(questions[i].text)
    }

    let correct = 0;
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].isCorrect == answers[i]) {
            correct++;
        }

    }


    alert(`\tStatistika\n\nVseqo voprosov ${questions.length}\nPravilnix otvetov : ${correct}\nNepravilnix otvetov : ${questions.length-correct}`)

    if (correct > 0) {
        let print = confirm("Vvivesti ne pravilnie testi ? ")
        if (print) {
            for (let i = 0; i < questions.length; i++) {
                if (questions[i].isCorrect == answers[i]) {
                    console.log(questions[i].text);
                }

            }
        }
    }

} else {
    alert(`Execusme ${name} your age (${age}) does not pass the age limit`);
}