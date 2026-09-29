# Space Quiz
A fast-paced, bilingual (Arabic / English) space trivia game built for **PDO Knowledge World**. Players race a 60-second timer, earn more points for answering correctly on the first try, and compete on a daily leaderboard.

## Features

- **Two languages:** choose Arabic or English on the start screen. The questions, score and timer labels switch to the chosen language.
- **60-second timer:** the game ends when time runs out, when you press Submit, or when you finish every question.
- **Attempt-based scoring:** the fewer tries you need, the more points you earn.
- **Time bonus:** answering correctly on the first try adds 1 second back to the clock.
- **Seperate question file:** the questions and thier answers are in a seperate file for easy editing.
- **Randomised questions and answers:** the question order and answer order are shuffled every play.
- **Daily leaderboard:** the top 10 scores are shown at the end, with your own entry highlighted. The board resets automatically each day.
- **Play again:** go straight back to the start screen after a run.

## Scoring 
- Correct on 1st try: 100 points and +1 second
- Correct on 2nd try: 50 points
- Correct on 3nd try: 25 points
- 4th try or more: 0 points

## How to Play
1. Enter your name on screen
2. Pick language
3. Answer as many questions as you can before the timer hits zero. Wrong answers turn red and you can try again for fewer points.
4. Press **Next** to move on, or **Submit** to finish early.
5. See where you rank on the leaderboard, then press **Play again** to have another go.

## Getting started

No build step or dependencies are needed.

```bash
git clone https://github.com/fbusaidi/spaceQuiz.git
cd space-quiz
```

Open `index.html` in your browser. To run it from a local server instead (optional):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
space-quiz/
├── index.html        # Start, quiz and leaderboard screens
├── stylesheet.css    # Styling and animations
├── script.js         # Game logic, timer, scoring and leaderboard
├── questions.js      # English and Arabic question banks
└── logo.png          # PDO logo
```

## Adding or editing questions

Questions live in the `questions` object in `questions.js`, with one array per language (`english` and `arabic`). Each question has the question text, an array of answers, and the index of the correct answer:

```js
{
  question: "Which planet is known as the Red Planet?",
  answers: ["Venus", "Mars", "Jupiter", "Mercury"],
  correct: 1
}
```

Answers are shuffled at runtime, so the order you write them in doesn't matter. Just make sure `correct` is the index of the right answer in your source list (starting from 0).

## How the leaderboard works

Scores are saved in the browser's `localStorage`, so the leaderboard is **per device and per browser**. It is not shared between players on different machines. The board is cleared automatically when the date changes.

## Built with

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)

## Author

**Falak Al Busaidi**
Developed for PDO Knowledge World.