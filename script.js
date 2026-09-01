const questions = [
    {
        question: "What is the name of our planet?",
        answers: [
            "Earth", "Venus", "Mercury", "Jupiter"
        ],
        correct: 0
    }
];

const startButton = document.getElementById("startButton");
const startScreen = document.querySelector(".startScreen");
const quizScreen = document.querySelector(".quizScreen");

startButton.addEventListener("click", function() {
    startScreen.style.display = "none"; 
    quizScreen.style.display = "block";
});