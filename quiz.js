let submitAnswer = document.querySelector("#submit-answer");
let feedback = document.querySelector("#feedback");

submitAnswer.addEventListener('click', () => {
    checkAnswer();
})



let checkAnswer = () => {
    let correctAnswer = '4';
    let userAnswer = displayRadioValue();

    if (userAnswer === correctAnswer){
        feedback.textContent = 'Correct! Well done';
    }else{
        feedback.textContent = "That's incorrect. Try again!";
    }
    
}


let displayRadioValue = () =>  {
    let radioButtonValue = document.getElementsByName('quiz');

    for (let i = 0; i < radioButtonValue.length; i++) {
        if (radioButtonValue[i].checked)
        // return a string value of the checked radio button
        return radioButtonValue[i].value;
    }
};