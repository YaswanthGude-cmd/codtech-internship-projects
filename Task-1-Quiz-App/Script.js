const questions = [

  {
    question: "Which language is mainly used for web page interactivity?",
    options: ["Python", "Java", "JavaScript", "C"],
    answer: "JavaScript"
  },

  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<img>", "<a>", "<link>", "<p>"],
    answer: "<a>"
  },

  {
    question: "Which CSS property changes the text color?",
    options: ["font-style", "background-color", "color", "display"],
    answer: "color"
  },

  {
    question: "Which company developed Java?",
    options: ["Google", "Microsoft", "Sun Microsystems", "Apple"],
    answer: "Sun Microsystems"
  },

  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: "//"
  },

  {
    question: "Which method is used to print something in browser console?",
    options: ["console.print()", "print()", "console.log()", "document.write()"],
    answer: "console.log()"
  },

  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<heading>", "<head>", "<h1>"],
    answer: "<h1>"
  },

  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["==", "!=", "===", "="],
    answer: "==="
  },

  {
    question: "Which CSS property is used to make elements flexible in layout?",
    options: ["position", "display:flex", "float", "visibility"],
    answer: "display:flex"
  },

  {
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "constant", "const"],
    answer: "const"
  },

  {
    question: "Which function converts JSON data into a JavaScript object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
    answer: "JSON.parse()"
  },

  {
    question: "Which HTML attribute is used to display an image source?",
    options: ["href", "src", "alt", "link"],
    answer: "src"
  },

  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while"
  },

  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "concat()"],
    answer: "push()"
  },

  {
    question: "Which event occurs when a user clicks on an HTML element?",
    options: ["onhover", "onmouse", "onclick", "onchange"],
    answer: "onclick"
  }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");

const nextButton = document.getElementById("next-btn");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");

const scoreText = document.getElementById("score-text");
const message = document.getElementById("message");

loadQuestion();

// Function to load a question 

function loadQuestion() {

  resetState();

  const currentQuestion = questions[currentQuestionIndex];

  questionElement.innerText = currentQuestion.question;

  progressText.innerText =
    `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  let progressPercent =
    (currentQuestionIndex / questions.length) * 100;

  progressBar.style.width = `${progressPercent}%`;

  currentQuestion.options.forEach(option => {

    const button = document.createElement("button");

    button.innerText = option;

    button.classList.add("option-btn");

    button.addEventListener("click", () => {
      checkAnswer(button, option);
    });

    optionsElement.appendChild(button);
  });
}

// Function of Resetstate

function resetState() {

  feedbackElement.innerText = "";

  nextButton.classList.add("hidden");

  optionsElement.innerHTML = "";
}

// Function to Check Answer

function checkAnswer(button, selectedOption) {

  const correctAnswer = questions[currentQuestionIndex].answer;

  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach(btn => {
    btn.disabled = true;
  });

  if (selectedOption === correctAnswer) {

    button.classList.add("correct");

    feedbackElement.innerText = "Correct Answer ✅";

    score++;

  } else {

    button.classList.add("wrong");

    feedbackElement.innerText =
      `Wrong Answer ❌ Correct Answer: ${correctAnswer}`;

    buttons.forEach(btn => {

      if (btn.innerText === correctAnswer) {
        btn.classList.add("correct");
      }
    });
  }

  setTimeout(() => {
    nextButton.classList.remove("hidden");
  }, 500);
}

nextButton.addEventListener("click", () => {

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {

    loadQuestion();

  } else {

    showResult();
  }
});

// Function to show Result

function showResult() {

  quizBox.classList.add("hidden");

  resultBox.classList.remove("hidden");

  progressBar.style.width = "100%";

  scoreText.innerText =
    `You scored ${score} out of ${questions.length}`;

  let percentage =
    (score / questions.length) * 100;

  if (percentage >= 80) {

    message.innerText =
      "Excellent Performance 🚀";

  } else if (percentage >= 50) {

    message.innerText =
      "Good Job 👍";

  } else {

    message.innerText =
      "Keep Practicing 📚";
  }
}

// Function to Restart Quiz

function restartQuiz() {

  currentQuestionIndex = 0;

  score = 0;

  resultBox.classList.add("hidden");

  quizBox.classList.remove("hidden");

  loadQuestion();
}