 function createQuestion(question, answerA, isCorrectA, answerB, isCorrectB) {
     let obj = {};
     obj.question = question;
     obj.variantA = {};
     obj.variantA.Answer = answerA;
     obj.variantA.isCorrect = isCorrectA;
     obj.variantB = {};
     obj.variantB.Answer = answerB;
     obj.variantB.isCorrect = isCorrectB;
     return obj;
 }


 let arr = [
     createQuestion("How many letters are there in the world \"Hello\"?", 5, true, 2, false),
     createQuestion("How many letters are there in the world \"World\"?", 3, false, 5, true),
     createQuestion("What's 2 + 2 =??", 5, false, 4, true)
 ]

 function FillTest(arr, currentQuestion) {
     let question = document.querySelector('#question');

     question.innerText = (currentQuestion + 1) + ") " + arr[currentQuestion].question;

     document.querySelector('#variantAAnswer').innerText = arr[currentQuestion].variantA.Answer;
     document.querySelector('#variantBAnswer').innerText = arr[currentQuestion].variantB.Answer;

     document.querySelector('#inp1').value = arr[currentQuestion].variantA.isCorrect;
     document.querySelector('#inp2').value = arr[currentQuestion].variantB.isCorrect;
 }


 let currentQuestion = 0;
 let countCorrectAnswer = 0;
 document.forms.myForm.addEventListener('submit', function() {
     event.preventDefault();

     if (currentQuestion == arr.length + 1) location.reload();



     if (currentQuestion > 0 && currentQuestion < arr.length + 1 && document.forms.myForm.answer.value == 'true')
         countCorrectAnswer++;

     if (currentQuestion == 0) {
         let btn = document.querySelector('#btn');
         btn.innerText = 'Next';
         document.querySelector('#inp1').hidden = false;
         document.querySelector('#inp2').hidden = false;
     }

     if (currentQuestion < arr.length) {
         FillTest(arr, currentQuestion);
         currentQuestion += 1;
         if (currentQuestion == arr.length) {
             document.querySelector('#btn').innerText = 'Finish';
         }
     } else {
         currentQuestion += 1;
         document.querySelector('#btn').innerText = "Reload";
         document.querySelector('#inp1').hidden = true;
         document.querySelector('#inp2').hidden = true;
         document.querySelector('#variantAAnswer').hidden = true;
         document.querySelector('#variantBAnswer').hidden = true;
         document.querySelector('#question').innerText = `Result: ${countCorrectAnswer} correct answers to ${arr.length} qustions.`;
     }
 });