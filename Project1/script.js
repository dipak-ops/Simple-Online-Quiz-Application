const quizData = [
  {
    question: "1. What is the output of print(type([])) in Python?",
    options: ["<class 'list'>", "<class 'array'>", "<class 'tuple'>", "<class 'dict'>"],
    answer: "<class 'list'>"
  },
  {
    question: "2. Which data structure uses FIFO (First In, First Out)?",
    options: ["Stack", "Tree", "Queue", "Graph"],
    answer: "Queue"
  },
  {
    question: "3. What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)"
  },
  {
    question: "4. Which keyword is used to define a function in Python?",
    options: ["func", "function", "def", "define"],
    answer: "def"
  },
  {
    question: "5. Which of the following is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML"
  },
  {
    question: "6. What does SQL stand for?",
    options: [
      "Structured Question Language",
      "Simple Query Language",
      "Structured Query Language",
      "Sequential Query Language"
    ],
    answer: "Structured Query Language"
  },
  {
    question: "7. Which symbol is used for comments in JavaScript?",
    options: ["#", "//", "<!-- -->", "/* */"],
    answer: "//"
  },
  {
    question: "8. Which data structure uses LIFO?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    answer: "Stack"
  },
  {
    question: "9. What is the default value of a boolean in Java?",
    options: ["true", "false", "0", "null"],
    answer: "false"
  },
  {
    question: "10. Which operator is used for strict equality in JavaScript?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },
  {
    question: "11. Which company developed Java?",
    options: ["Microsoft", "Apple", "Sun Microsystems", "Google"],
    answer: "Sun Microsystems"
  },
  {
    question: "12. What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "13. Which loop runs at least once?",
    options: ["for", "while", "do-while", "foreach"],
    answer: "do-while"
  },
  {
    question: "14. Which keyword is used to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "15. Which algorithm is used to find the shortest path?",
    options: ["DFS", "BFS", "Dijkstra", "Prim"],
    answer: "Dijkstra"
  },
  {
    question: "16. What is the extension of JavaScript files?",
    options: [".java", ".js", ".jsx", ".script"],
    answer: ".js"
  },
  {
    question: "17. Which method converts JSON to a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    answer: "JSON.parse()"
  },
  {
    question: "18. Which HTML tag is used for JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>"
  },
  {
    question: "19. What is the index of the first element in an array?",
    options: ["0", "1", "-1", "Any"],
    answer: "0"
  },
  {
    question: "20. Which sorting algorithm is fastest on average?",
    options: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Quick Sort"],
    answer: "Quick Sort"
  }
];

let currQuestion = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

function loadQuestion() {
    selectedOption = null;
    optionsEl.innerHTML = "";

    let q = quizData[currQuestion];
    questionEl.innerText = q.question;

    q.options.forEach(option => {
        let div = document.createElement("div");
        div.classList.add("option");
        div.innerText = option;

        div.onclick = () => selectOption(div, option);
        optionsEl.appendChild(div);
    });
}

function selectOption(element, option) {
    let options = document.querySelectorAll(".option");
    options.forEach(opt => opt.classList.remove("selected"));

    element.classList.add("selected");
    selectedOption = option;
}

function nextQuestion() {
    if (selectedOption === null) {
        alert("Please select an option");
        return;
    }

    if (selectedOption === quizData[currQuestion].answer) {
        score++;
    }

    currQuestion++;

    if (currQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".box").innerHTML = `
        <h2>Quiz Completed</h2>
        <p>Your Score: ${score} / ${quizData.length}</p>
    `;
}

loadQuestion();
