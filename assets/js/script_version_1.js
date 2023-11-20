var quizContainer = document.getElementById("quiz-container")
var startButton = document.getElementById("start_btn")
quizContainer.style.display = "none"
var questionText = document.getElementById("que_text")
var options = document.querySelectorAll(".options")
var correct = document.getElementById("correct")
var timerEl = document.querySelector(".timer_sec");
var quizover = document.getElementById("quizover")
quizover.style.display = "none"
var scoreElement = document.getElementById("score") 
var InitialsElement = document.getElementById("Initials")
var buttonElement = document.getElementById("initalsButton")

// Initialize the current question index, score, and timer
let currentQuestionIndex = 0;
let score = 0;
let timerLeft = 80;
var timeInterval;

buttonElement.addEventListener("click", savescore)
options.forEach(element => element.addEventListener("click",checkAnswer))
// Timer that counts down from 80
function countdown() {
   

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timerLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timerLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timerLeft--;
        } else if (timerLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timerLeft + ' second remaining';
            timerLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
        }
    }, 1000);
}



const questions = [
    {
        question: "Commonly used data types DO Not Include:",
        answers: ["strings","booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store_________.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within__________when being assigned to variables. ",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAnswer: "console.log"
    }

];

// Start the quiz
startButton.addEventListener("click", function startQuiz() {
    quizContainer.style.display = "block"
    startButton.style.display = "none"
    displayCurrentQuestion()
    countdown()
})
// Display the current question
function displayCurrentQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question
    for (let i = 0; i < 4; i++) {
        options[i].innerText = question.answers[i]
    }

}

function showResults (){
    quizContainer.style.display = "none"
    quizover.style.display = "block"
    clearInterval(timeInterval);
    scoreElement.textContent = timerLeft
}
function savescore () {
    var Initials = InitialsElement.value
    console.log(Initials)
    // first retieve any saved scores from localstorage
    // add a new score to the array {initials: "", score: 12}
// then save the updated array back to localstorage
    localStorage.setItem("key", JSON.stringify())
}

//     // Add an event listener to the answer choice
function checkAnswer(event) {
    var answer = event.target.innerText
      // Check if the answer is correct
      if (answer === questions[currentQuestionIndex].correctAnswer) {
        // Increase the score
        score++;
        correct.innerText ="Correct"
      }else{
        timerLeft -=5;
        correct.innerText ="Wrong"
      }


      // Display the next question, or the results page if the quiz is over
      if (currentQuestionIndex < questions.length-1) {
        
      // Move to the next question
      currentQuestionIndex++;
       displayCurrentQuestion();
      } else {
        showResults();
      }

}
//     answerElements.push(answerElement);
//   }

//   // Append the question and answer elements to the quiz div
//   const quizElement = document.getElementById("quiz");
//   quizElement.appendChild(questionElement);
//   for (const answerElement of answerElements) {
//     quizElement.appendChild(answerElement);
//   }

//   // Start the timer
//   setInterval(function() {
//     timer--;

//     // Display the remaining time
//     const timerElement = document.getElementById("timer");
//     timerElement.innerHTML = timer;

//     // If the timer expires, end the quiz and show the results
//     if (timer === 0) {
//       showResults();
//     }
//   }, 1000);

//   // Hide the submit button
//   const submitButton = document.getElementById("submit");
//   submitButton.style.display = "none";
// }

// // // Show the results of the quiz
// // function showResults:


// // Access toggle switch HTML element
// var themeSwitcher = document.querySelector("#theme-switcher");
// var container = document.querySelector(".container");

// // Set default mode to purple
// var mode = "purple";

// // Listen for a click event on toggle switch
// themeSwitcher.addEventListener("click", function() {
//   // If mode is purple, apply light background
//   if (mode === "purple") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   // If mode is light, apply dark background
//   else {
//     mode = "purple";
//     container.setAttribute("class", "purple");
//   }
// });
