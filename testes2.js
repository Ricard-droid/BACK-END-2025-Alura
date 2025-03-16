const bicicletas = [];

const marcas = [
    "Caloi", "Monark", "Sense", "Oggi", "Soul Cycles", "Cannondale", "Specialized", 
    "Trek", "Scott", "Giant", "Merida", "Bianchi", "Pinarello", "Cervelo", 
    "Colnago"
];

marcas.forEach((marca, index) => {
    if (index < 100) {
        bicicletas.push({ id: index + 1, marca: marca });
    }
});

console.log(bicicletas);

// outros exemplos :

const notas = ['A','B','C','D','E'];

notas.forEach(function (nota) { 
 console.log(nota);
});

/* a explicação ...
Certo! Essa função vai ser executada para cada elemento do array. 
É o que chamamos de “função callback”, quando uma função é passada como parâmetro de outra função e executada dentro deste contexto.
continua...
*/


//fim.