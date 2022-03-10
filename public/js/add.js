let firstNumber = Math.floor(Math.random()*100);
let secondNumber = Math.floor(Math.random()*firstNumber);
let answer = firstNumber + secondNumber;

while (firstNumber + secondNumber > 99 || 
    fNS.length != 2 ||
    sNS.length != 2) {
    firstNumber = Math.floor(Math.random()*100);
    secondNumber = Math.floor(Math.random()*firstNumber);
    answer = firstNumber + secondNumber;
}
let fNS = firstNumber.toString();
let sNS = secondNumber.toString();

