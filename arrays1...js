const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")
 
console.log(arrayConcat); // concatenado
console.log(arrayOriginal);// original

// novo teste 

const arrayOriginalX = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcatX = arrayOriginal.concat(["André", "Fernanda"], ["Ricardo_JM", "Márcia_Dias"], ["Marcelo", "Bia"])
 
console.log(arrayConcatX);// concatenado; mais de um array como parâmetro.
console.log(arrayOriginalX);// original

// novo teste 

const Y = [50, 60, 70];// array original 
const X = Y.concat([80, [90, 100]]);// array concatenado com mais de um array como parâmetro (leu como um único dado)
 
console.log(Y);
console.log(X);

/*
Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.

concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.
*/

const funcionarios = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
  ];

  console.log(`${funcionarios[0][2]} tem ${funcionarios[1][2]} anos.`);//[] é o array, o [] segundo é o item do array.