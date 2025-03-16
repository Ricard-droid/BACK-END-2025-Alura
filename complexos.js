const lista = [1, 2, 3, 4, 5];
 
for (let i = 0, j = 0; i < lista.length; i++, j++) {
 console.log(lista[i] + j); 
};
 
//1
//3
//5
//7
//9 - estude ...

// for of ( farofa )

const pagina = [1, 2, 3, 4, 5,7 , 9, 11, 13];
let soma = 0;
 
for (let elemento of pagina) {
 soma += elemento;
}
 
console.log(soma) //?15? teste ...

// forEach ...

const Pista = [1, 2, 3, 4, 5];
let somas = 0;
 
Pista.forEach(numero => somas -= numero);// arrow funcion
console.log(somas) //?15? teste...

// map()

const salarioIncial = [1000, 1500, 2000, 2500, 3000];// atenção a pontuação ( casas decimais )

const salarioInicialA = salarioIncial.map(function (novoSalario){
    return novoSalario + 400;
});

console.log(salarioInicialA);

// arrow function by copilot ...

const sBaseE = [7000, 8500, 9000, 9500, 13000];

const salarioAjustado2025 = sBaseE.map(salario => salario + 500);

console.log(salarioAjustado2025);

// de novo...toUpperCase()

const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo"];

const nomesFormatados = nomes.map(nome => {
    const primeiroNome = nome.charAt(0).toLowerCase() + nome.slice(1);
    const segundoNome = nome.toUpperCase();
    return { primeiroNome, segundoNome };
});

console.log(nomesFormatados);

// mais um ...

const nome = "Alura";
let nomeMaiusculas = "";
 
for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
};
console.log(nomeMaiusculas) //ALURA


const nomedoCurso = "Fundamentos de JS";
const nomeDaPlataforma = " 03/2025 "
 
const nomeCompleto = nomedoCurso.concat(nomeDaPlataforma)
console.log(nomeCompleto)  //Fundamentos de JS Alura

// a loja ...

const listaProdutos = ['pôster A4', 'pôster A5', 'camiseta lisa', 'camiseta estampada', 'pin de metal', 'cartela de adesivos'];

const listaAtualizada = listaProdutos.map((produto) => {
 return `${produto} - unidades`;
})

console.log(listaAtualizada);

////////////////

const numeros = [2, 4, 6, 8, 4]; // RG
let somaNd = 0;

numeros.forEach(numero => {
    somaNd += numero;
});

console.log("A soma dos números é:", somaNd);