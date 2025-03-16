// Javascript dinamicamente tipada esta linguagem 

let exemplo = 10; // exemplo é do tipo número (Number)
console.log(exemplo); // Saída: 10

exemplo = 'Olá, mundo!'; // agora exemplo é uma string (String)
console.log(exemplo); // Saída: Olá, mundo!

exemplo = true; // exemplo agora é um booleano (Boolean)
console.log(exemplo); // Saída: true

/*
Como podemos notar, a variável exemplo começa como um número, depois é alterada para uma string e, por fim, 
para um booleano. Houve uma mudança dinâmica de tipos.

lembre-se do typeof que é uma função que retorna o tipo de dado de uma variável.atenção ao NULL e UNDEFINED.
*/

Number("1"); // retorna o número 1 
Number("Alura"); // retorna NaN
Number(undefined); // retorna NaN
Number(null); // retorna 0

console.log(typeof exemplo); // Saída: boolean
console.log(Number("1")); // Saída: 1
console.log(Number("Alura")); // Saída: NaN
console.log(Number(undefined)); // Saída: NaN
console.log(Number(null)); // Saída: 0


//parseInt(‘4’); // retorna o número 4
//parseInt(‘4.5’); // retorna o número 4
//parseFloat(‘4’); // retorna o número 4
//parseFloat(‘4.5’); // retorna o número 4.5
//parseFloat(‘4.5abc’); // retorna o número 4.5

'estudando JavaScript'.includes('Java'); // retorna true
console.log('estudando JavaScript'.includes('Java')); // Saída: true

// includes() é um método que verifica se uma string contém outra string.
// O método retorna true se a string contida for encontrada, e false caso contrário.

Number(true);
Number(false);
console.log(Number(true)); // Saída: 1
console.log(Number(false)); // Saída: 0

//booleanos ele converte para a base da computação 1 e 0.

let valor1;
let valor2 = null;
let valor3 = 0;
console.log(valor1); // Saída: undefined
console.log(valor2); // Saída: null
console.log(valor3); // Saída: 0


const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;
console.log(resultado); 

let resultados;
resultados = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultados da expressão é:", resultados.toFixed(2));

let fio = 7;
console.log(fio++); // Saída: 7 (retorna o valor atual de i)
console.log(fio);   // Saída: 8 (i foi incrementado após a execução)

let rjm= 1252;
console.log(++rjm); // Saída: 1253 (j foi incrementado antes de ser usado)
console.log(rjm);   // Saída: 1253 (j já foi incrementado)

//teste

let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);//5 
console.log("O valor de valorB é:", valorB);//7

/*
O operador i++ faz um pós-incremento, o que significa que primeiro atribui o valor atual de i a valorA e depois incrementa i. 
Em seguida, o operador ++i incrementa o valor de i e atribui esse valor a valorB.
*/

let minduim = 985
console.log(minduim++);
console.log(minduim++);
console.log(minduim);

// mais uma ...

const novosNumeros = [5,8,7,10,17,3,12,13,25,40];
let novaSoma = 0;

for (let i = 0; i < novosNumeros.length; i++) {
    novaSoma += novosNumeros[i];
};

const novaMedia = novaSoma / novosNumeros.length;

console.log("A média dos números é:", novaMedia);

// novo estudo 

const numeros = [100, 200, 300, 400, 500, 600];
 
for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
};

// novo estudo 

const A = [700, 800, 900, 1000, 1100, 1200];
 
for (let i = A.length - 1; i >= 0; i -= 2) {
  console.log(A[i]);
};

// e lá vamos nós ...

const B = [125,429,328,999,567,745,651,254,853];
 
for (let i = B.length - 1; B[i] >= 300; i -= 2) {
  console.log(B[i]);
};

// bugando tudo ...for of ( farofa )

const numerosPares = [];
 
for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}
 
console.log(numerosPares);