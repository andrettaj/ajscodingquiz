// Timer that counts down from 5
// function countdown() {
    // var timeLeft = 5;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  //   var timeInterval = setInterval(function () {
  //     // As long as the `timeLeft` is greater than 1
  //     if (timeLeft > 1) {
  //       // Set the `textContent` of `timerEl` to show the remaining seconds
  //       timerEl.textContent = timeLeft + ' seconds remaining';
  //       // Decrement `timeLeft` by 1
  //       timeLeft--;
  //     } else if (timeLeft === 1) {
  //       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
  //       timerEl.textContent = timeLeft + ' second remaining';
  //       timeLeft--;
  //     } else {
  //       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
  //       timerEl.textContent = '';
  //       // Use `clearInterval()` to stop the timer
  //       clearInterval(timeInterval);
  //       // Call the `displayMessage()` function
  //       displayMessage();
  //     }
  //   }, 1000);
  // }

  // document.getElementById("box1").addEventListener("click", changeColor);
  // function changeColor() {
  //   document.getElementById("box1").innerHTML ="CLICK";
  //   document.getElementById("box1").style.backgroundColor = "orange";
  // };

  // document.getElementById("box2").addEventListener("click", changeColor);
  // function changeColor() {
  //   document.getElementById("box2").innerHTML ="CLICK";
  //   document.getElementById("box2").style.backgroundColor = "orange";
  // };

  // document.getElementById("box3").addEventListener("click", changeColor);
  // function changeColor() {
  //   document.getElementById("box3").innerHTML ="CLICK";
  //   document.getElementById("box3").style.backgroundColor = "orange";
  // };

  // document.getElementById("box4").addEventListener("click", changeColor);
  // function changeColor() {
  //   document.getElementById("box4").innerHTML ="CLICK";
  //   document.getElementById("box4").style.backgroundColor = "orange";
  // };

  // const questions = [
  //   {
  //     question: "Commonly used data types DO Not Include:",
  //     answers:  ["strings, booleans, alerts, numbers" ],
  //     correctAnswer: "alerts"
  //   },
  //   {
  //     question: "The condition in an if/else statement is enclosed with ______.",
  //     answers:  ["quotes, curly brackets, parenthesis, square brackets"],
  //     correctAnswer: "parenthesis"
  //   },
  //   {
  //     question: "Arrays in JavaScript can be used to store_________.",
  //     answers:  ["numbers and strings, other arrays, booleans, all of the above" ],
  //     correctAnswer: "all of the above"
  //   },
  //   {
  //     question: "String values must be enclosed within__________when being assigned to variables. ",
  //     answers:  ["commas, curly brackets, quotes, parenthesis" ],
  //     correctAnswer: "parenthesis"
  //   },
  //   {
  //     question: "A very useful tool used during development and debugging for printing content to the debugger is:",
  //     answers:  ["JavaScript, terminal/bash, for loops, console.log" ],
  //     correctAnswer: "console.log"
  //   }
    
  // ];
  

  // Initialize the current question index, score, and timer
let currentQuestionIndex = 0;
let score = 0;
let timer = 60;

// Start the quiz
function startQuiz() {
  // Display the current question
  const question = questions[currentQuestionIndex];
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = question.question;

  // Display the answer choices
  const answerElements = [];
  for (const answer of question.answers) {
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.innerHTML = answer;

    // Add an event listener to the answer choice
    answerElement.addEventListener("click", function() {
      // Check if the answer is correct
      if (answer === question.correctAnswer) {
        // Increase the score
        score++;
      }

      // Move to the next question
      currentQuestionIndex++;

      // Display the next question, or the results page if the quiz is over
      if (currentQuestionIndex < questions.length) {
        startQuiz();
      } else {
        showResults();
      }
    });

    answerElements.push(answerElement);
  }

  // Append the question and answer elements to the quiz div
  const quizElement = document.getElementById("quiz");
  quizElement.appendChild(questionElement);
  for (const answerElement of answerElements) {
    quizElement.appendChild(answerElement);
  }

  // Start the timer
  setInterval(function() {
    timer--;

    // Display the remaining time
    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = timer;

    // If the timer expires, end the quiz and show the results
    if (timer === 0) {
      showResults();
    }
  }, 1000);

  // Hide the submit button
  const submitButton = document.getElementById("submit");
  submitButton.style.display = "none";
}

// // Show the results of the quiz
// function showResults: 


// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to purple
var mode = "purple";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is purple, apply light background
  if (mode === "purple") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "purple";
    container.setAttribute("class", "purple");
  }
});
