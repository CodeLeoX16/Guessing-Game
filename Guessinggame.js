let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const restartGame = document.getElementById('restartGame');

submitGuess.addEventListener('click', () => {
    const userGuess = Number(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        feedback.textContent = '🎉 Congratulations! You guessed the correct number!';
        feedback.style.color = 'green';
        submitGuess.disabled = true;
    } else if (userGuess > randomNumber) {
        feedback.textContent = '📉 Too high! Try again.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = '📈 Too low! Try again.';
        feedback.style.color = 'red';
    }
});

restartGame.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = attempts;
    feedback.textContent = '';
    guessInput.value = '';
    submitGuess.disabled = false;
});