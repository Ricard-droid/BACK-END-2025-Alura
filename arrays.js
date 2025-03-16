const nota1 = 10;
const nota2 = 6.8;
const nota3 = 4.0;
const nota4 = 7.25;
const nota5 = 8.0

const media = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
console.log(media.toFixed(2));


const lista = [10.0, 6.8, 7.0, 8.25, 9.0]; 
const calculo = (lista[0] + lista[1] + lista[2] + lista[3] + lista[4]) / lista.length;
console.log(calculo.toFixed(2));

// lenght é uma propriedade que retorna o número de elementos de um array.
// O método toFixed() formata um número utilizando notação de ponto fixo.
// 0 é índice do array e a vantagem menos variáveis e mais organização.

// índice     0   1   2   3
const nums = [50, 43, 12, 98];
console.log(nums.length) //4

/*
Considerando que o array acima tem 4 elementos, podemos dizer que o valor retornado por length sempre será 1 número a mais do que o valor de índice mais alto. 
Neste caso, o array nums é um array de 4 elementos e seus índices vão de 0 a 3.
*/

// cada valor é chamado de elemento ou item do array, estamos falando de DADOS !
const arrayDeNumeros = [50, 43, 12];
const arrayDeStrings = ["banana", "alura", "Juliana"];
const arrayDeBoleanos = [true, false, true];
const arrayVazio = [];
console.log(arrayDeNumeros.length); //3
console.log(arrayDeStrings.length); //3
console.log(arrayDeBoleanos.length); //3
console.log(arrayVazio.length); //0

/*
Quando se trata de como os índices são armazenados na memória em JavaScript, é importante entender que os arrays em JavaScript são implementados como objetos. 
Internamente, os índices são tratados como chaves (ou propriedades) de um objeto, onde cada chave é associada ao seu valor correspondente (o elemento do array).
*/

const notas07 = [10, 6.8, 7, 8.25, 9];
notas07.push(7.5);
const media07 = (notas07[0] + notas07[1] + notas07[2] + notas07[3] + notas07[4] + notas07[5]) / notas07.length;
console.log(media07.toFixed(2));

// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
// O método push() altera o array original e retorna o novo comprimento do array.