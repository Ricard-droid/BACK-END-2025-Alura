const arrayVazia = [];
 
console.log(arrayVazia)
console.log(arrayVazia.length)

const arrayVazia2 = [];
console.log(arrayVazia2[0]) //undefined
console.log(arrayVazia2[1]) //undefined

const arrayVazia3 = [,,,];
console.log(arrayVazia3.length)
console.log(arrayVazia3[0])
console.log(arrayVazia3[1])
console.log(arrayVazia3[2])

const arrayVazia4 = [,,,];
console.log(arrayVazia4.length)
arrayVazia4.push(50)
console.log(arrayVazia4)
console.log(arrayVazia4.length)

const notas21 = [10, 6.8, 7, 8.25, 9];
notas21.push(7.5);
const media21 = (notas21[0] + notas21[1] + notas21[2] + notas21[3] + notas21[4] + notas21[5]) / notas21.length;
console.log(media21.toFixed(2));
notas21.pop();
console.log(notas21);

// O método pop() remove o último elemento de um array e retorna esse elemento.
// O método pop() altera o array original e retorna o elemento removido.
//o metodo push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
//o metodo push() altera o array original e retorna o novo comprimento do array.

const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];
const arraySimVazio2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(Boolean(arraySimVazio2)); // Saída: false - Um array vazio é "falsy"

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"

const newarray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(newarray.length) //0

const truthyArray = [1, 2, 3];
console.log(Boolean(truthyArray)); // Saída: true

const falsyArray = [];
console.log(Boolean(falsyArray.length)); // Saída: false

const newFalsyArray = [undefined, null, 0, "", NaN];
console.log(Boolean(newFalsyArray)); // Saída: true

const falsyNew2 = [];
console.log(Boolean(falsyNew2.length)); // Saída: false

//Um método é uma função chamada (executada) no contexto de um objeto (array, number, string, etc).

(9.999).toFixed(2); // toFixed é um método de Number
'string'.toUpperCase(); // toUpperCase é um método de String
const numbers = [1, 2, 3];
numbers.push(4); // push é um método de Array
console.log(numbers); // Saída: [1, 2, 3, 4]

const lista = [7, 13, 'JavaScript', 'Alura', true];
lista.push(false);
console.log(lista.length); // 6



const jantarDeHoje = ['burguer', 'hot-dog', 'pizza'];

jantarDeHoje.pop()
jantarDeHoje.pop()//remove o último elemento do array

jantarDeHoje.push('ovo frito')//adiciona um elemento ao final do array
jantarDeHoje.push('salada')
jantarDeHoje.push('maçã')

console.log(jantarDeHoje);

