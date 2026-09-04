// The transition from start page to the quiz page
let score = 0;
let qIndex = 0;
let selectedLang = "arabic";
let player = "";
let leaderboardRank = [];
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

// Submit button
submitButton.addEventListener("click", function() {
    showLeaderboard();
})

function startQuiz() {
    startScreen.style.display = "none"; 
    quizScreen.style.display = "block";
    score = 0;
    qIndex = 0;
    scoreDisplay.textContent = "Score: " + score;
    player = playerName.value.trim();

    showQuestion();
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

    questionNumber.textContent = "Question " + (qIndex + 1) + " of " + questions[selectedLang].length;

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

    leaderboardRank.push({
        name: player, score: score
    });

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
    .forEach(function(entry, index) {
        ranking.innerHTML += `
            <div id="rankingRow">
                <p>${index + 1}</p>
                <p>${entry.name}</p>
                <p>${entry.score}</p>
            </div>
        `;
    });
}


