const question = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const result = document.getElementById("result");
const scoreValue = document.getElementById("scoreValue");
const questions = [
    { text: "Quem foi o primeiro presidente dos Estados Unidos?", answer: "George Washington" },
    { text: "Qual país foi o berço da Revolução Industrial?", answer: "Reino Unido" },
    { text: "Em que ano a Primeira Guerra Mundial começou?", answer: "1914" },
    { text: "Quem pintou a Mona Lisa?", answer: "Leonardo da Vinci" },
    { text: "Qual é a capital do Japão?", answer: "Tóquio" }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    question.textContent = `Pergunta: ${questions[currentQuestionIndex].text}`;
    answerInput.value = "";
    result.textContent = "";
}

function checkAnswer() {
    const answer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        result.textContent = "Resposta correta!";
        score++;
        scoreValue.textContent = score;
    } else {
        result.textContent = "Resposta incorreta. Tente novamente.";
    }

    // Avança para a próxima pergunta ou encerra o jogo
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        question.textContent = "Fim do Jogo!";
        answerInput.style.display = "none";
        result.style.display = "none";
    }
}

// Carrega a primeira pergunta ao iniciar o jogo
loadQuestion();
