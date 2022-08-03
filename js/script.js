var intro = alert("Welcome to F1 Tickets!");

var elFormBtn = document.querySelectorAll(".btn");
var elFormInput = document.querySelectorAll(".input");
var elTextAnswer = document.querySelectorAll(".t-answer");



elFormBtn[0].addEventListener("click", (event) => {
  event.preventDefault();
  let input = elFormInput[0].value.trim();

   if(input >= 16 && input < 45) {
    elTextAnswer[0].textContent = "You can participate in the race";
  }
  else if(input == 15) {
    elTextAnswer[1].textContent = "Please try again in a years";
  }
  else if(input == 14) {
    elTextAnswer[1].textContent = "Please try again in two years";
  }
  else if(input == 13) {
    elTextAnswer[1].textContent = "Please try again in three years";
  }
  else if(input == 12) {
    elTextAnswer[1].textContent = "Please try again in four years";
  }
  else if(input == 11) {
    elTextAnswer[1].textContent = "Please try again in five years";
  }
  else if(input == 10) {
    elTextAnswer[1].textContent = "Please try again in six years";
  }
  else if(input >= 0 && input <= 9) {
    elTextAnswer[1].textContent = "Sorry, you're too young to race";
  }
  else if(isNaN(input)) {
    elTextAnswer[1].textContent = "Please enter a number";
  }
  else if(input >= 60) {
    elTextAnswer[1].textContent = "Sorry you are too old to participate :(";
  }
  else if(input <= 0){
    elTextAnswer[1].textContent = "Please enter your age in the number";
  }
   
  elFormInput[0].value = "";
  }
);