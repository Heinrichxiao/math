let firstNumber = Math.floor(Math.random()*100);
let fNS = firstNumber.toString();
let secondNumber = Math.floor(Math.random()*firstNumber);
let sNS = secondNumber.toString();
let answer = firstNumber + secondNumber;

while (firstNumber + secondNumber > 99 || 
  fNS.length != 2 ||
  sNS.length != 2) {
  firstNumber = Math.floor(Math.random()*100);
  fNS = firstNumber.toString();
  secondNumber = Math.floor(Math.random()*firstNumber);
  sNS = secondNumber.toString();
  answer = firstNumber + secondNumber;
}

// Show numbers
function showNumbers() {
  
}