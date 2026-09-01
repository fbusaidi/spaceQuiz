const questions = [
    {
        question: "What is the name of our planet?",
        answers: [
            "Earth", "Venus", "Mercury", "Jupiter"
        ],
        correct: 0
    },
    {
        question: "What is the name of the closest planet to the sun?",
        answers: [
            "Earth", "Venus", "Mercury", "Jupiter"
        ],
        correct: 2
    },
    {
        question: "What is the name of the hottest planet in our solar system?",
        answers: [
            "Earth", "Venus", "Mercury", "Jupiter"
        ],
        correct: 1
    }
];

// The transition from start page to the quiz page
const startButton = document.getElementById("startButton");
const startScreen = document.querySelector(".startScreen");
const quizScreen = document.querySelector(".quizScreen");

startButton.addEventListener("click", function() {
    startScreen.style.display = "none"; 
    quizScreen.style.display = "block";
});

// Displaying questions from the js
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const answers = document.getElementById("answers");

function showQuestion() {
    const currentQuestion = questions[0];
    question.textContent = currentQuestion.question;

    answers.innerHTML = "";
    currentQuestion.answers.forEach(function(answer) {
        const button = document.createElement("button");
        button.textContent = answer;
        answers.appendChild(button);
    });
}

showQuestion();