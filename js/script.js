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
  else if(input > 0 && input <= 9) {
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


elFormBtn[1].addEventListener("click", (event) => {
  event.preventDefault()
  elTextAnswer[0].textContent = "";
  elTextAnswer[1].textContent = "";
  }
);




elFormBtn[2].addEventListener("click", (event) => {
  event.preventDefault();
  let input = elFormInput[1].value.trim();
 
  if(input >= 50000 && input < 100000) {
    elTextAnswer[2].textContent = "Tabiriklayman siz sayohatga Madridga borasiz";
  }
  else if(input >= 100000 && input < 150000) {
    elTextAnswer[2].textContent = "Tabiriklayman siz sayohatga Berlinga borasiz";
  }
  else if(input >= 150000 && input < 200000) {
    elTextAnswer[2].textContent = "Tabiriklayman siz sayohatga Zagrebga borasiz";
  }
  else if(input >= 200000) {
    elTextAnswer[2].textContent = "Tabiriklayman siz sayohatga Shveytsariyaga borasiz";
  }
  else if(input > 0 && input < 100000) {
    elTextAnswer[3].textContent = "Kechirasiz bizda bu narxlarda sayohat qilish imkoniyati yo'q";
  }
  else if(input < 0) {
    elTextAnswer[3].textContent = "Iltimos musbat son kiriting";
  }
  else if(isNaN(input)) {
    elTextAnswer[3].textContent = "iltimos raqam kiriting";
  }
    
  elFormInput[1].value = "";
  }
);
 
elFormBtn[3].addEventListener("click", (event) => {
  event.preventDefault()
  elTextAnswer[2].textContent = "";
  elTextAnswer[3].textContent = "";
  }
);
 