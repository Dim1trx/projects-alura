alert("Boas vindas ao jogo do numero secreto!");
let maxRange = 1000
let secretNumber = parseInt(Math.random() * maxRange) + 1;
let guess;
let attempts = 1;
console.log(secretNumber);

while (true) {
    guess = prompt(`Escolha um valor entre 1 e ${maxRange}!`);

    if (guess == secretNumber) break;    

    else {
        let higherOrLower = (secretNumber > guess) ? "maior": "menor";
        alert(`Voce errou! O número secreto é ${higherOrLower} que ${guess}!`);
        attempts ++;
    }
}

let attemptsWord = attempts > 1 ? `tentativas`: `tentativa`;
let winMessage = (`Parabens, voce acertou o numero secreto (${secretNumber}), com um total de ${attempts} ${attemptsWord}`);

alert(winMessage);