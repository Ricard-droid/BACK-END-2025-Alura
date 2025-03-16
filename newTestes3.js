
const rNumber = [1, 2, 3, 4, 5, 6, 7];
const multiplique =  rNumber.map(function (numeros) {
    return numeros * 10;
});
console.log(multiplique);

//com arrow functions 

const YNumbers = [8, 9, 10, 11, 12];
const calc = YNumbers.map(itens => itens * 10)
console.log(calc);

//for each 

const biblioteca = ['a', 'b', 'c', 'd', 'e', 'm', 'r', 'J'];
biblioteca.forEach((item, index) => {
    console.log(`O aluno fez a seguinte pesquisa: Item: ${item}, Index: ${index}`);
});

// IA Copilot estudo...

function executaOperacaoEmArray(array, callback) {
    array.forEach(element => {
        console.log(callback(element));
    });
};

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
executaOperacaoEmArray(numeros, num => num * 2);

// IA Copilot estudo ...


function encontrarIndice(array, numero) {
    const indice = array.indexOf(numero);
    return indice !== -1 ? indice : -1;
}

// Exemplo de uso:
const numerosParaVerificar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeroParaEncontrar = 5;
const resultado = encontrarIndice(numerosParaVerificar, numeroParaEncontrar);
console.log(`O índice do número ${numeroParaEncontrar} é: ${resultado}`);

// IA Copilot estudo ...

const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Marcia Mineira Dias',
    'Lucas Fernandes'
  ];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const alunoProcurado = 'Marcia Mineira Dias';
const alunoEncontrado = todasAsTurmas.find(nome => nome === alunoProcurado);

if (alunoEncontrado) {
    console.log(`Aluno encontrado: ${alunoEncontrado}`);
} else {
    console.log('Aluno não encontrado');
};

// E por fim, estudo IA Copilot - questôes Alura " sábado, março, 2025, luta!"

const Anumeros = [1, 2, 3, 4, 7, 9, 14, 18, 21];

Anumeros.forEach(numero => {
    console.log(numero * 3);
});

const indiceDoDezoito = Anumeros.findIndex(numero => numero === 18);
console.log(`O índice do número 18 é: ${indiceDoDezoito}`);

// to be continued... contando filter js

const alunos = ['Marcia', 'Ricardo', 'João', 'Ana', 'Carlos'];
const medias = [7, 6.5, 2, 8, 10];

const avaliacao = alunos.filter((aluno, I) => {
    return aluno.length < 4;

});

console.log(avaliacao);

// filter js continue...

const alunosR = ['Marcia', 'Ricardo', 'João', 'Ana', 'Carlos'];
const mediasN = [8.5, 9.5, 2, 8, 5];

const avaliacaoX = alunosR.filter((_, I) => { // _ omitiu aluno ( boa prática )
    return mediasN[I] <= 6;

});

console.log(avaliacaoX);

// reduce ... reduz os elementos de um array a um elemento SÓ !

const js = [7, 8, 9, 10];
const visualg  = [10, 9, 8, 5];
const python  = [3, 2, 10, 7.5];
const java  = [11, 8, 9, 7];
const css  = [8, 6.75, 7.50, 9];

function melhorTurma (notasDaClasse){
  const media = notasDaClasse.reduce((acumulador, nota) => {
    return acumulador + nota;

  }, 0);
  const calc = media / notasDaClasse.length;
   return calc;
};    
console.log(melhorTurma(js).toFixed(2));
console.log(melhorTurma(visualg).toFixed(2));
console.log(melhorTurma(python).toFixed(2));
console.log(melhorTurma(java).toFixed(2));
console.log(melhorTurma(css).toFixed(2));
