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

let score = 0;
let qIndex = 0;

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
const scoreDisplay = document.getElementById("score");


function showQuestion() {
    const currentQuestion = questions[qIndex];
    let answered = false;
    question.textContent = currentQuestion.question;

    questionNumber.textContent = "Question " + (qIndex + 1) + " of " + questions.length;

    answers.innerHTML = "";
    currentQuestion.answers.forEach(function(answer, index) {
        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", function() {
            if (index == currentQuestion.correct && !answered) {
                score += 100;
                scoreDisplay.textContent = "Score: " + score;
                answered = true;
            } else {
                console.log("Wrong");
            }
        });

        answers.appendChild(button);
    });
}


//Next Button
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function() {
    qIndex ++;
    showQuestion();
})

showQuestion();