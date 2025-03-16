animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha');// índice , quantidade de elementos a serem removidos.(Índice 1 remove 0 ou seja, está colocando um no índice um).
animaisDoAquario.splice(3, 2, 'atum');

console.log(animaisDoAquario);

/*
Certo! No aquário, o golfinho e o tubarão não estão presentes por conta do código animaisDoAquario.splice(3, 2, 'atum'), 
que remove dois elementos do array, a partir da posição 3. Sendo assim, os elementos com índice 3 e 4 
e os dois peixes entraram nas posições definidas pelo splice.
*/

//splice x slice
//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

garagem = ['carro', 'moto', 'bicicleta', 'caminhão', 'ônibus', 'caminhonete'];
garagem.splice(2, 1, 'lancha');
garagem.push('jet ski','Fusca','Kombi','bicicleta');
console.log(garagem);
// lembre-se: índice (remove ou seja, troca), qtde de elementos (adicionaum item no índice 2).
