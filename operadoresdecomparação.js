if ('1' === 1) {
    console.log('é igual ou seja, passou na comparação');
} else {
    console.log('não é igual, ou seja não passou na comparação');
};

// == comparação de valores
// === comparação de valores e tipos

console.log('Deus seja louvado  - Ricardo JMarçal - Alura - mês 03/2025');

//Memes do JavaScript
("b" + "a" + + "a" + "a").toLowerCase(); //baNaNa
// A string "ba" + "a" + + "a" + "a" é igual a "ba" + "a" + "NaN" + "a".
// O operador + é usado para concatenar strings.
console.log(("b" + "a" + + "a" + "a").toLowerCase()); //banana


let matriculaAtiva = true;

function verificaMatriculaAtiva() {
 if (matriculaAtiva === true) {
   return 'matrícula ativa no sistema';
 } else {
   return 'matrícula não está ativa';
 }
}

console.log(verificaMatriculaAtiva());
// retorna 'matrícula ativa no sistema'

let matriculaAtiva1 = false;

function verificaMatriculaAtiva10() {
 return matriculaAtiva1 ? 'matrícula ativa no sistema' : 'matrícula não está ativa';
}

console.log(verificaMatriculaAtiva10());
// retorna 'matrícula ativa no sistema'

/*
Notou que, em vez de matriculaAtiva === true, escrevemos apenas matriculaAtiva na condição? Nesses casos, quando a condição avalia se algo é “igual a true”, podemos suprimir a parte === true. 
A regra do JavaScript de valores truthy e falsy também se aplica aqui!
*/

let idadeEstudante = 14;
let precisaDeAutorizacao;

if (idadeEstudante < 18) {
 precisaDeAutorizacao = true;
} else {
 precisaDeAutorizacao = false;
}

console.log(precisaDeAutorizacao);

// operador ternário 

let idadeEstudante100 = 19;
const precisaDeAutorizacao12 = idadeEstudante100 < 18 ? true : false;
console.log(precisaDeAutorizacao12); // true

// exercicios de comparação

let valor1 = '5';
let valor2 = 5;

let resultado1 = valor1 + valor2;
let resultado2;

if (valor1 === valor2) {
 resultado2 = 'Os valores são iguais.';
} else {
 resultado2 = 'Os valores são diferentes.';
}

console.log('Resultado 1:', resultado1);
console.log('Resultado 2:', resultado2);

/*
Quando um operador de adição (+) é usado com uma string (’5’) e um número (5), ocorre a concatenação, 
resultando em "55" para resultado1. 
Como valor1 é uma string e valor2 é um número, eles são de tipos diferentes e, portanto, valor1 === valor2 é falso, 
fazendo resultado2 indicar "Os valores são diferentes".
*/

const numero = 10;
const resultado1215 = (numero > 5 && numero < 15);
const resultado21 = (numero === 10 || numero > 20);
const resultado31 = !(numero < 5);

console.log("Resultado 1215:", resultado1215);
console.log("Resultado 21:", resultado21);
console.log("Resultado 31:", resultado31);

/*
resultado1215 será true pois a expressão numero > 5 && numero < 15 verifica se numero é maior que 5 e menor que 15, o que é verdadeiro para numero = 10.

resultado21 será true pois a expressão numero === 10 || numero > 20 verifica se numero é igual a 10 ou maior que 20, o que é verdadeiro para numero = 10.

resultado31 será true pois a expressão !(numero < 5) nega o resultado de numero < 5. Esse resultado é false para numero = 10, assim a negação de false se torna true.

*/

// Exemplo Gemini by Google - 2025 - Ricardo JMarçal - Alura ( atente-se que se trata de negativa de um valor booleano);

let numeroJ = 3;
const resultado32 = !(numeroJ < 5);
console.log(resultado32); // Saída: false

numeroR = 7;
const resultado33 = !(numeroR < 5);
console.log(resultado33); // Saída: true