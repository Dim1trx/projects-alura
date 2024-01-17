/**
 * Função para alterar o texto de um elemento HTML.
 * @param {string} tag - A tag do elemento HTML.
 * @param {string} text - O novo texto a ser atribuído ao elemento.
 */
function changeTextOfElement(tag, text) {
    document.querySelector(tag).innerHTML = text;
}

/**
 * 
 * @param {number} maxRange 
 * @returns number
 */
function  getRandomNumber(maxRange){
    let randomNum = parseInt((Math.random() * maxRange) + 1);
    if(secretNumbers.length == maxRange) secretNumbers = [];

    if (secretNumbers.includes(randomNum)) return getRandomNumber(maxRange);

    else{
        secretNumbers.push(randomNum);
        return randomNum;
    }
}

function verifyGuess(){
    let guess = document.querySelector('input').value;
    
    if(guess == randomNumber){
        let attempsWord = attempts > 1 ? "tentativas" : "tentativa";
        var message = `Voce acertou o numero secreto com ${attempts} ${attempsWord}.`;
    
        changeTextOfElement("h1", "Parabens!");
        changeTextOfElement("p", message);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else{
        let text = randomNumber > guess ? "maior" : "menor";
        changeTextOfElement("p", `O numero secreto é ${text} que o seu chute.`)
        attempts ++;
    }
}

function initialMessage(){
    changeTextOfElement("h1", "Jogo do numero secreto");
    let message = "Escolha um numero entre 1 e " + maxRange;
    changeTextOfElement("p", message);
    console.log(randomNumber);
    console.log(secretNumbers);
}

function restart(){
    initialMessage()
    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', true)
    randomNumber = getRandomNumber(maxRange);
    attempts = 1;
}

let secretNumbers = []
let attempts = 1;
let maxRange = 5;
let randomNumber = getRandomNumber(maxRange);


initialMessage()