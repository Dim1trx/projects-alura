let title = document.querySelector("h1");
title.innerHTML = "Hora do desafio!";

function consoleButton(){
    console.log("O botao foi clicado!");
}

function alertButton(){
    alert("Eu amo JS!");
}

function promptButton(){
    let city = prompt("Informe uma cidade do Brasil: ");

    alert(`Estive em ${city} e lembrei de voce.`);
}

function sumButton(){
    let num1 = parseInt(prompt("Informe o primeiro valor: "));
    let num2 = parseInt(prompt("Informe o segundo valor: "));
    let sum = num1 + num2;
    alert(`A soma de ${num1} + ${num2} = ${sum}`);
}