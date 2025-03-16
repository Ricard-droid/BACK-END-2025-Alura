const voce = (nome ) => nome;
console.log(voce('Ricardo'));
console.log(voce('Presente Márcia'));

// arrow function é expressão de função
// arrow function é uma função anônima
// arrow function suprime chaves e return quando tem apenas uma linha
// arrow function é uma forma mais simples de escrever uma função
// muito utilizada em call back functions e funções anônimas
// arrow function não tem this, arguments, super e new.target

const carros = (marcas) => marcas;
console.log(carros('Toyota'));
console.log(carros('Honda'));
console.log(carros('wolksvagem'));
console.log(carros('Fiat'));
console.log(carros('Chevrolet'));

// Função de calculadora simples
function calculadoraSimples(a, b, operacao) {
    let resultado;
    if (operacao === 'soma') {
        resultado = a + b;
    } else if (operacao === 'subtracao') {
        resultado = a - b;
    } else if (operacao === 'multiplicacao') {
        resultado = a * b;
    } else if (operacao === 'divisao') {
        resultado = a / b;
    } else {
        resultado = 'Operação não reconhecida';
    }
    return resultado;
};
console.log(calculadoraSimples(10, 5, 'soma')); // 15
console.log(calculadoraSimples(10, 5, 'subtracao')); // 5
console.log(calculadoraSimples(10, 5, 'multiplicacao')); // 50
console.log(calculadoraSimples(10, 5, 'divisao')); // 2
console.log(calculadoraSimples(10, 5, 'potencia')); // Operação não reconhecida
console.log('-------------------------------------');

// com arrow function

const calculadora_N_simples = (a, b, operacao) => {
    if (operacao === 'soma') {
        return a + b;
    } else if (operacao === 'subtracao') {
        return a - b;
    } else if (operacao === 'multiplicacao') {
        return a * b;
    } else if (operacao === 'divisao') {
        return a / b;
    } else {
        return 'Operação não reconhecida';
    }
};
console.log(calculadora_N_simples(10, 5, 'soma')); // 15
console.log(calculadora_N_simples(10, 5, 'subtracao')); // 5
console.log(calculadora_N_simples(10, 5, 'multiplicacao')); // 50
console.log(calculadora_N_simples(10, 5, 'divisao')); // 2
console.log(calculadora_N_simples(10, 5, 'potencia')); // Operação não reconhecida
console.log('-------------------------------------');