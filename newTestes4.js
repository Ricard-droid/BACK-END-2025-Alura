const numerosXPTO = [43, 50, 65, 12, 24, 36, 48, 60];
 
const somando = numerosXPTO.reduce((acumulado, atual) => atual + acumulado, 0)
 
console.log(somando); // ?veja quanto dá ...
console.log(numerosXPTO);

// outro exercício ...

let num1 = 10;
let num2 = num1;

num2 += 4;
num1 += 14;

console.log(`Num1 é ${num1}. Num2 é ${num2}`);

// continue...

let numeroOriginal = 21;

function alteraNumero(numero) {
  numero = 50;

  console.log(`numero do parâmetro é ${numero}. numeroOriginal é ${numeroOriginal}`);
}

alteraNumero(numeroOriginal); // nascimento  e idade ...

// de novo ... JS pensa ser o mesmo array 

const notas = [7, 21, 45, 13, 18];

const novasNotas = notas;

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas são ${notas}`);

// 

const arrayOriginal = [7, 7, 8, 9]; 

function alteraArray(array) {
  array.push(10);

  console.log(`array do parâmetro é ${array}`);
  console.log(`arrayOriginal é ${arrayOriginal}`);
}

alteraArray([...arrayOriginal]); // quero como saída uma cópia e não a sua referencia 

// set : elimina duplicidade ( case sensitiv : Set )

const bagunça =  [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7, 8, 9, 10, 15, 15];

const arruma =  new Set(bagunça);

console.log(...arruma);


// vale a pena, estude ...

const Y = [10, 2, 3, 4, 5];

const total = Y.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0);

console.log("A soma dos números é:", total);

/*
O método reduce é usado para iterar sobre os elementos do array numeros e acumular a soma dos valores desses números no parâmetro acumulador. 
No final, a variável total contém a soma total dos números.
*/