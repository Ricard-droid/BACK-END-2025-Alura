const estudantesListaA = ['Márcia','Ricardo', 'Marilia', 'Jonas', 'Miguel', 'Ana', 'Lorena', 'Sofia', 'Carlos', 'Mário'];
const salaB= estudantesListaA.slice(estudantesListaA.length / 2);// lista completa dividida ao meio(fim/metade)
const salaA= estudantesListaA.slice(0,estudantesListaA.length / 2);//lista iniciada do 0 até a metade.
const salaC= estudantesListaA.slice(2,estudantesListaA.length / 2);//lista iniciada do 2 até a metade.
const salaD= estudantesListaA.slice(estudantesListaA.length);//lista vazia
const salaF= estudantesListaA.slice();//lista completa

console.log(salaB);
console.log(salaA);
console.log(salaC);
console.log(salaD);
console.log(salaF);

const salaE = estudantesListaA.slice(); // lista completa
salaE.forEach(nome => console.log(nome));

// O método forEach() executa uma dada função em cada elemento de um array.
// O método forEach() não retorna nada (undefined).
// O método forEach() não altera o array original.
// O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições inicial e final (fim não incluso).
//mdn web docs ( consultas documentos )
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

// A salaD
/*
Boa tarde, meu amigo! O problema está na forma como você está usando o método `.slice()` na criação da `salaD`. Vou explicar o que acontece.

### Entendendo o `.slice()`
O método `.slice(início, fim)` retorna uma cópia de parte do array original, começando no índice `início` e terminando **antes** do índice `fim`. Se `início` for maior ou igual ao comprimento do array, o retorno será um array vazio (`[]`), pois não há elementos para extrair.

### O Problema com `salaD`
```js
const salaD = estudantesListaA.slice(estudantesListaA.length);
```
Aqui, `estudantesListaA.length` é **o tamanho do array**, ou seja, 10. O método `.slice(10)` começa a fatiar a partir do índice 10, mas como o array tem no máximo 10 elementos (com índice de 0 a 9), não há nada para extrair. O resultado, portanto, é um array vazio `[]`.

### Como Resolver?
Se a intenção era copiar todo o array, basta fazer:
```js
const salaD = estudantesListaA.slice(); // Clona o array inteiro
```
Ou, se queria extrair a última parte do array (por exemplo, a segunda metade):
```js
const salaD = estudantesListaA.slice(estudantesListaA.length / 2);
```

Me avise se precisar de mais explicações! 🚀
*/