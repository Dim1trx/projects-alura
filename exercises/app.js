//secao 1 atividades:

// alert("boas vindas ao nosso site!")

// let nome = "Lua"
// let idade = 25
// let numeroDeVendas = 50
// let saldoDisponivel = 1000

// console.log(
//     "Nome:" + nome, 
//     "idade:" + idade, 
//     "numeroDeVendas:" + numeroDeVendas, 
//     "saldoDisponivel:" + saldoDisponivel, 
// )

// alert("Erro! preencha todos os campos")

// let mensagemErro = "Erro! preencha todos os campos"
// alert(mensagemErro)

// nome = prompt("Informe seu nome: ")
// idade = prompt("Agora informe sua idade: ")

// let mensagem = "nao pode tirar a habilitacao!"
// if(idade >= 18){
//     mensagem = "Pode tirar a habilitacao!"
// }

// alert(mensagem)

//secao 2 atividades:
// let day = prompt("Qual é o dia da semana?");
// console.log(day)
// let message = (day == "Sabado" || day == "Domingo") ? "Bom final de semana!" : "Boa semana!"
// alert(message)

// let num = prompt("Informe um numero: ")
// console.log(num)
// message = num < 0 ? "Valor inserido e negativo!" : "Valor inserido e positivo"
// alert(message)

// let points = 0
// console.log(points)
// message = points >= 100 ? "Parabéns, você venceu!" : "Tente novamente para ganhar"
// alert(message)

// let balance = 500.00
// console.log(balance)
// alert(`Seu saldo e igual a: R$${balance}`)

// let name = prompt("Informe seu nome: ")
// alert(`Boas vindas ${name}!`)

//secao atividades 3

console.log("boas vindas usuario!");

let nome = "Yago Rodrigues";
console.log(`Ola, ${nome}`);

alert(`Ola, ${nome}`);

console.log(prompt("Qual a linguagem de programacao que voce mais gosta?"));

let valor1 = 5;
let valor2 = 10;
let sum = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${sum}`);

valor1 = 5;
valor2 = 10;
subtraction = valor1 - valor2;
console.log(`A diferenca de ${valor1} e ${valor2} é igual a ${subtraction}`);

let idade = prompt("informe sua idade: ");
let message = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(message)

console.log("Numero pseudo aleatorio: " + parseInt(Math.random()));
console.log(`Numero pseudo aleatorio entre 1 e 10: ${(parseInt(Math.random() *10) + 1)}`)
console.log(`Numero pseudo aleatorio entre 1 e 1000: ${(parseInt(Math.random() *1000) + 1)}`)