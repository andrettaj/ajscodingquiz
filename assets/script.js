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

  document.getElementById("box1").addEventListener("click", changeColor);
  function changeColor() {
    document.getElementById("box1").innerHTML ="CLICK";
    document.getElementById("box1").style.backgroundColor = "orange";
  };

  document.getElementById("box2").addEventListener("click", changeColor);
  function changeColor() {
    document.getElementById("box2").innerHTML ="CLICK";
    document.getElementById("box2").style.backgroundColor = "orange";
  };

  document.getElementById("box3").addEventListener("click", changeColor);
  function changeColor() {
    document.getElementById("box3").innerHTML ="CLICK";
    document.getElementById("box3").style.backgroundColor = "orange";
  };

  document.getElementById("box4").addEventListener("click", changeColor);
  function changeColor() {
    document.getElementById("box4").innerHTML ="CLICK";
    document.getElementById("box4").style.backgroundColor = "orange";
  };