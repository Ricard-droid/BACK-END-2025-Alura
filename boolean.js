const estudo = 'Ricardo';
const aprovado  = true;
const reprovado = false;
const nota = 9.5;

if (nota >= 7.5 === aprovado){
    console.log(`Parabéns, ${estudo}! Você foi aprovado!`);
} else {
    console.log(`Infelizmente, ${estudo}, você foi reprovado.`);
};

let valorString = '20';
let valorNumero = parseInt(valorString);

console.log(valorNumero); // Saída: 20 (valor convertido para número usando parseInt)

let valorString1 = '20.5';
let valorNumero1 = parseFloat(valorString1);

console.log(valorNumero1); // Saída: 20.5 (valor convertido para número usando parseFloat)

let carro = 'Fusca';
console.log(carro); // Saída: Fusca

let geladeira; // Variável declarada, mas não inicializada
console.log(geladeira); // Saída: undefined

let fogão = null; // Variável declarada e inicializada com null
console.log(fogão); // Saída: null

let gato = 'miau';
console.log(typeof gato); // Saída: string = tipo de dado
