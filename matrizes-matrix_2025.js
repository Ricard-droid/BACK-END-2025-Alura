const carros = ["Fusca", "Gol", "Civic", "Corolla", "Mustang", "Camaro", "Ferrari", "Porsche", "Lamborghini", "Tesla"];
const motos = ["Harley Davidson", "Yamaha", "Honda", "Suzuki", "Kawasaki", "Ducati", "BMW", "Triumph", "KTM", "Royal Enfield"];
const bicicletas = ["Caloi", "Monark", "Sense", "Oggi", "Specialized", "Trek", "Cannondale", "Scott", "Giant", "Merida"];
const maquinasDeLavar = ["Brastemp", "Consul", "Electrolux", "LG", "Samsung", "Panasonic", "Philco", "Midea", "Fischer", "GE"];
const geladeiras = ["Brastemp", "Consul", "Electrolux", "LG", "Samsung", "Panasonic", "Philco", "Midea", "Fischer", "GE"];
const fogoes = ["Brastemp", "Consul", "Electrolux", "LG", "Samsung", "Panasonic", "Philco", "Midea", "Fischer", "GE"];
const tenis = ["Nike", "Adidas", "Puma", "Reebok", "Asics", "Mizuno", "New Balance", "Under Armour", "Fila", "Converse"];
const roupas = ["Camiseta", "Calça", "Shorts", "Vestido", "Saia", "Blusa", "Jaqueta", "Casaco", "Moletom", "Regata"];
const relogios = ["Rolex", "Omega", "Tag Heuer", "Casio", "Seiko", "Citizen", "Tissot", "Swatch", "Fossil", "Timex"];
const televisoes = ["Samsung", "LG", "Sony", "Panasonic", "Philips", "TCL", "Sharp", "Vizio", "Hisense", "Toshiba"];

const matrizes = [carros, motos, bicicletas, maquinasDeLavar, geladeiras, fogoes, tenis, roupas, relogios, televisoes];

matrizes.forEach((matriz, index) => {
    console.log(`Matriz ${index + 1}:`);
    console.log(matriz);
});

// A explicação do código acima é a seguinte:
// 1. Temos 10 arrays, cada um representando um tipo de produto.
// 2. Todos esses arrays estão dentro de um array maior chamado `matrizes`.
// 3. Usamos o método `forEach()` para percorrer o array `matrizes`.
// 4. Para cada array interno (cada matriz), exibimos o índice do array (começando em 1) e o conteúdo do array.
// 5. O índice é obtido através do segundo parâmetro da função de callback do `forEach()`, que representa a posição do array atual no array `matrizes`.
// 6. O `index + 1` é usado para exibir o índice começando em 1, em vez de 0.
// 7. O `console.log()` exibe o índice e o conteúdo de cada matriz.
//fim. copilot explicou tudo , estamos em março de 2025, Praia Grande - SP.
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice