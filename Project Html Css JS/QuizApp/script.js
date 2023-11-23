import { question } from "./QuestionBank.js";
const quesBox = document.getElementById("quesBox");
const options = document.querySelectorAll(".options");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");
const restartTest = document.querySelector(".Restart-Test");
const endQuizEle = document.querySelector(".endQuiz");
const questionOption = document.querySelector(".question-option");
const getOutOff = document.querySelector(".get-outoff");
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;

const reset = () => {
    options.forEach((input) => {
        input.checked = false;

    })
}



const endQuiz = () => {

    endQuizEle.style.display = "block";
    restartTest.style.display = "block";
    questionOption.style.display = "none";
    getOutOff.innerHTML = `${right} / ${total} are currect`;
    box.setAttribute("id", 'Box');
}
const loadQuestion = () => {
    restartTest.style.display = "none";
    if (index >= total) {
        endQuiz();
        return;
    }
    reset();
    const data = question[index];
    // console.log(data)
    quesBox.textContent = data.que;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}
const getAnswer = () => {
    let ans;
    options.forEach((input) => {
        if (input.checked) {
            ans = input.value;
            return;
        }
    })
    return ans;
}

const submitQuiz = () => {
    const data = question[index];
    let ans = getAnswer();
    if (ans === data.correct) {
        right++;

    } else {
        wrong++;
    }
    index++;
    loadQuestion();

    return;

}


btn.addEventListener('click', submitQuiz);
loadQuestion();

//Restart test 
const restart = () => {
    index = 0;
    right = 0;
    wrong = 0;
    questionOption.style.display = "block";
    endQuizEle.style.display = "none";
    box.setAttribute("id", 'null')
    loadQuestion();

}

restartTest.addEventListener('click', restart);