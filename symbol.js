// Criando um símbolo
const meuSimbolo = Symbol();

// Símbolos podem receber uma descrição (opcional)
const simboloComDescricao = Symbol('descricao_do_simbolo');

// Símbolos são únicos
const outroSimbolo = Symbol();
console.log(meuSimbolo === outroSimbolo); // Saída: false

// Símbolos podem ser usados como chaves de propriedades de objetos
const obj = {
  [meuSimbolo]: 'valor_do_simbolo'
};

// Acessando a propriedade usando o símbolo como chave
console.log(obj[meuSimbolo]); // Saída: 'valor_do_simbolo'

/////////////////pulanpdo linha 2025

// Criando símbolos para propriedades únicas de carros
const marca = Symbol('marca');
const modelo = Symbol('modelo');
const ano = Symbol('ano');

// Criando um objeto carro usando símbolos como chaves
const carro1 = {
    [marca]: 'Toyota',
    [modelo]: 'Corolla',
    [ano]: 2021
};

const carro2 = {
    [marca]: 'Honda',
    [modelo]: 'Civic',
    [ano]: 2022
};

const carro3 = {
    [marca]: 'wolksvagem',
    [modelo]: 'Fusca',
    [ano]: 1975
};

// Acessando as propriedades dos carros usando os símbolos
console.log(carro1[marca]); // Saída: 'Toyota'
console.log(carro1[modelo]); // Saída: 'Corolla'
console.log(carro1[ano]); // Saída: 2021

console.log(carro2[marca]); // Saída: 'Honda'
console.log(carro2[modelo]); // Saída: 'Civic'
console.log(carro2[ano]); // Saída: 2022

console.log(carro3[marca]); // Saída: 'wolksvagem'
console.log(carro3[modelo]); // Saída: 'Fusca'
console.log(carro3[ano]); // Saída: 1975

/* O tipo Symbol é um dos tipos primitivos em JavaScript, introduzido no ES6 (ECMAScript 2015), 
e representa um identificador único e imutável. 
Símbolos são frequentemente utilizados para criar propriedades de objeto 
que são únicas e não interferem com outras propriedades existentes.*/

/*Dado que os símbolos são únicos, mesmo quando criados com a mesma descrição, 
tornam-se ideais para a criação de chaves de propriedades de objetos. 
Essa característica evita conflitos com outras chaves, prevenindo a sobrescrita acidental de propriedades.

Além disso, símbolos também podem ser usados para adicionar propriedades "escondidas" em objetos, 
tornando-as inacessíveis sem a referência direta ao símbolo correspondente. 
Essa prática é particularmente útil em bibliotecas ou frameworks, contribuindo para evitar colisões de nomes de propriedades.*/