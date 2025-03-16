// node 
const nota1 = 10;
const nota2 = 1.8;
const nota3 = 4.0;
const nota4 = 1.25;

const soma = nota1 + nota2 + nota3 + nota4;
console.log(soma);

const nome = 'Ricardo';
const sobre  = 'De'; 
const sobre2 = 'Jesus'; 
const fim  = 'Marçal'; 
console.log("meu nome é  : " + nome +  sobre +  sobre2 +  fim);

console.log(5 * 'a'); // NaN - resultado de uma operação aritmética mal formada 

console.log(5 * '5'); //  O JavaScript, nestes casos, sempre tenta converter de forma implícita a string em número antes de tentar efetuar a operação aritmética.

const numero = 10;
const nomes = 'Ana';

console.log(Number.isNaN(numero)); // false   -  Como verificar se um valor é NaN?
console.log(Number.isNaN(nomes)); // false
console.log(Number.isNaN(NaN)); // true

console.log(isNaN(10)); // false
console.log(isNaN(nome)); // true
console.log(isNaN(NaN)); // true

/* A diferença é que Number.isNaN() irá retornar true apenas se o valor for efetivamente NaN, 
enquanto a função isNaN() irá retornar true inclusive para casos em que o valor pode ser avaliado como NaN 
se tentar ser convertido para número. Você pode utilizar um ou outro dependendo da sua necessidade. */

let numOctal = 0o10; // Isso representa o número 8 em octal
console.log(numOctal); // Saída: 8

let numHex = 0xA; // Representa o número 10 em hexadecimal
console.log(numHex); // Saída: 10

let numeroFlutuante = 3.14;
console.log(numeroFlutuante); // Saída: 3.14

let numeroInteiro = 10;
console.log(numeroInteiro); // Saída: 10