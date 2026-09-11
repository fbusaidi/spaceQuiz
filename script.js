let score = 0;
let qIndex = 0;
let selectedLang = "arabic";
let player = "";
let leaderboardRank = [];
let lastEntry = null;
let timeLeft = 60;
let timer;


const enButton = document.getElementById("enButton");
const arButton = document.getElementById("arButton");
const startScreen = document.querySelector(".startScreen");
const quizScreen = document.querySelector(".quizScreen");
const leaderboardScreen = document.querySelector(".leaderboard");
const myScore = document.getElementById("finalScore");
const playerName = document.getElementById("playerName");
const playAgain = document.getElementById("playAgain");
const submitButton = document.getElementById("submit");


enButton.addEventListener("click", function() {
    selectedLang = "english";
    startQuiz();
});

arButton.addEventListener("click", function() {
    selectedLang = "arabic";
    startQuiz();
})

playAgain.addEventListener("click", function() {
    leaderboardScreen.style.display = "none";
    startScreen.style.display = "block";

})

// reset leaderboard daily
function loadBoard() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem("leaderboardDate");

    if (savedDate === today) {
        leaderboardRank = JSON.parse(localStorage.getItem("leaderboard")) || [];
    } else {
        leaderboardRank = [];
        localStorage.removeItem("leaderboard");
        localStorage.setItem("leaderboardDate", today);
    }
    
}
loadBoard();

//shuffle answers
function shuffleAnswers(question) {
    const correctAnswer = question.answers[question.correct];

    // Shuffle the answers
    question.answers.sort(() => Math.random() - 0.5);

    // Find where the correct answer moved
    question.correct = question.answers.indexOf(correctAnswer);
}

// Submit button
submitButton.addEventListener("click", function() {
    clearInterval(timer);
    showLeaderboard();
})

// The transition from start page to the quiz page
function startQuiz() {
    startScreen.style.display = "none"; 
    quizScreen.style.display = "block";
    score = 0;
    qIndex = 0;
    if (selectedLang === "english") {
        scoreDisplay.textContent = "Score: " + score;
        questions.english.forEach(shuffleAnswers);
        questions.english.sort(() => Math.random() - 0.5);
    } else {
        scoreDisplay.textContent = "النتيجة: " + score;
        questions.arabic.forEach(shuffleAnswers);
        questions.arabic.sort(() => Math.random() - 0.5);
    }
    player = playerName.value.trim();
    playerName.value = "";
    localStorage.removeItem("playerName");
    
    showQuestion();
    startTimer();
}

//create timer 
function startTimer() {
    timeLeft = 30;
    if (selectedLang === "english") {
        document.getElementById("timer").textContent = "Time: " + timeLeft;
    } else {
        document.getElementById("timer").textContent = "الوقت: " + timeLeft;
    } 
    
    timer = setInterval(function() {
        timeLeft--;
        if (selectedLang === "english") {
            document.getElementById("timer").textContent = "Time: " + timeLeft;
        } else {
            document.getElementById("timer").textContent = "الوقت: " + timeLeft;
        } 
        if (timeLeft <= 0) {
            clearInterval(timer);
            showLeaderboard();
        }
    }, 1000);
}

// Displaying questions from the js
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreDisplay = document.getElementById("score");


function addScore(attempts) {
    if (attempts == 0) return 100;
    else if (attempts == 1) return 50;
    else if (attempts == 2) return 25;
    return 0;
}

function showQuestion() {
    const currentQuestion = questions[selectedLang][qIndex];
    let answered = false;
    let attempts = 0;

    question.textContent = currentQuestion.question;

    answers.innerHTML = "";
    currentQuestion.answers.forEach(function(answer, index) {
        const button = document.createElement("button");
        button.textContent = answer;

        button.addEventListener("click", function() {
            if (index == currentQuestion.correct && !answered) {
                score += addScore(attempts);
                scoreDisplay.textContent = "Score: " + score;
                button.classList.add("correct");
                answered = true;
            } else {
                attempts++;
                button.classList.add("wrong");
            }
        });

        answers.appendChild(button);
    });
}


//Next Button
const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", function() {
    if (qIndex < questions[selectedLang].length - 1) {
        qIndex++;
        showQuestion();
    } else {
        showLeaderboard();
    }
})

//displaying leaderboard
function showLeaderboard() {
    quizScreen.style.display = "none";
    leaderboardScreen.style.display = "block";

    saveScore();

    myScore.textContent = score;
    displayLeaderboard();
}

function displayLeaderboard() {
    const ranking = document.getElementById("ranking");

    ranking.innerHTML = `
        <div id="rankingHeader">
            <p>المركز</p>
            <p>الاسم</p>
            <p>النقاط</p>
        </div>
    `;

    leaderboardRank.sort(function(a, b) {return b.score - a.score;})
    .slice(0, 10)
    .forEach(function(entry, index) {
        let highlight = "";

        if (entry === lastEntry) {
            highlight = "myRanking";
        }
        
        ranking.innerHTML += `
            <div class ="rankingRow ${highlight}">
                <p>${index + 1}</p>
                <p>${entry.name}</p>
                <p>${entry.score}</p>
            </div>
        `;
    });
}

// save score to local storage
function saveScore() {
    const today = new Date().toDateString();
    const entry = {name: player, score: score};
    
    leaderboardRank.push(entry);
    lastEntry = entry;

    localStorage.setItem("leaderboard", JSON.stringify(leaderboardRank));
    localStorage.setItem("leaderboardDate", today);

}
