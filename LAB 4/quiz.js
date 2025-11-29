// New Quiz Questions
const quizQuestions = [
    { question: "What is the brain of the computer?", answer: "cpu" },
    { question: "Which device is used to store data permanently?", answer: "hard disk" },
    { question: "What does RAM stand for?", answer: "random access memory" },
    { question: "Which key is used to delete characters from the left?", answer: "backspace" },
    { question: "What is the basic unit of information in computing?", answer: "bit" }
];

// Shuffle Questions
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Main Quiz Function
function runQuiz() {
    let score = 0;
    let questions = shuffle([...quizQuestions]);

    for (let i = 0; i < questions.length; i++) {
        let userAns = prompt(`${i + 1}. ${questions[i].question}`);

        if (!userAns) {
            alert("Please enter an answer next time.");
            continue;
        }

        let cleanAns = userAns.toLowerCase().trim();

        // Exact match check (assignment-safe)
        if (cleanAns === questions[i].answer) {
            alert("Correct! ✔️");
            score++;
        } else {
            alert("Wrong! ❌ Correct answer: " + questions[i].answer);
        }
    }

    alert(`Quiz Finished!\nYour Score: ${score} / ${questions.length}`);
}

// Start Quiz
runQuiz();
