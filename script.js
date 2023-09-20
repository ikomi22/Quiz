const questions = [
    {
        question: "Who is the current UK prime minister?",
        answers: [
            { text: "Rishi Sunak", correct: true },
            { text: "Bill Clinton", correct: false },
            { text: "Robert Downey", correct: false },
            { text: "Liz Truss", correct: false },
        ]
    },
    {
        question: "How many countries make up the United Kingdom?",
        answers: [
            { text: "1", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "4", correct: true },
        ]
    },
    {
        question: "Who is the president of Nigeria?",
        answers: [
            { text: "Bola Ahmed Tinubu", correct: true },
            { text: "Tsemaye Michael IKOMI", correct: false },
            { text: "Elon Musk", correct: false },
            { text: "Mark Zuckerberg", correct: true },
        ]
    },
    {
        question: "Which is the largest mammal?",
        answers: [
            { text: "dog", correct: true },
            { text: "cat", correct: false },
            { text: "monkey", correct: false },
            { text: "whale", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => { // Corrected the event listener
            checkAnswer(answer.correct);
        });
        answerButtons.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Quiz is complete, you can display the score or perform any other action here
        alert("Quiz completed! Your score: " + score);
    }
}


function resetState() {
    
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    nextButton.style.display = "none";
}

startQuiz()