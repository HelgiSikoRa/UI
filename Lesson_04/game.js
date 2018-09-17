let lowerBound = 1;
let upperBound = 5;
let attemptsNumbers = 3;
let inputNumber;
let randomNumber;

function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

let startGame = confirm('Do you want to play a game?');
if (startGame) {
    while (attemptsNumbers > 0) {
        randomNumber = generateRandomInteger(lowerBound, upperBound);
        inputNumber = prompt(`Tape number from ${lowerBound} to ${upperBound}. Attempts remain: ${attemptsNumbers}`);
        if (inputNumber == randomNumber) {
            alert(`Congratulations! You are winner! Random number is: ${randomNumber}`);
            break;
        }
        attemptsNumbers--;
        if (attemptsNumbers == 0)
            alert('Today is not your day.');
    }
} else {
    alert('Not today.');
}