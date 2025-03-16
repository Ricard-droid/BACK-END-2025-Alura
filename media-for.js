const notasDesco = [6.0,8.5,9.0,9.5,10.0,7.0,7.5,];
let somaDeTodasAsNotasDesco = 0;

for (let i=0; i< notasDesco.length; i++){
    somaDeTodasAsNotasDesco += notasDesco[i];

};
const mediaDescoAnos = somaDeTodasAsNotasDesco / notasDesco.length;

console.log(`a Média Engenharia Desco É... ${mediaDescoAnos}`);
console.log(`A Média Desco Engenharia polida É... ${mediaDescoAnos.toFixed(3)}`);

//Estudos ...da Prof

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}.`);


//Estudos ... my Botas

const Botas1 = [10 , 6.5, 8 ,7.5];
const Botas2 = [9  , 6  , 6];
const Botas3 = [8.5, 9.5];
 
const BotasGerais = [Botas1, Botas2, Botas3];
 
let bMedia = 0;

for (let i = 0; i < BotasGerais.length; i++) {
    for (let j = 0; j < BotasGerais[i].length; j++) {
      bMedia += BotasGerais[i][j]/BotasGerais[i].length;
    }
  };
  console.log(bMedia);

  /*
  No entanto, este código retorna uma média de 24. 
  Como tal média é possível se não temos nenhum número maior do que 10? 
  O que acontece é que para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de Botas, 8+7+9 e dividir pela quantidade de arrays em BotasGerais.
  */

  const precos = [5.5, 6.2, 14, 19.5];

let desconto = 0.90;// aqui é volte sempre !

for (let i = 0; i < precos.length; i++) {
 precos[i] = precos[i] * desconto;
};

console.log(precos);

// o outro code de Carol ...for_of ou farofa ! Alura 2025 Brasil ! continue...

const oPrecos = [5.0, 6.0, 8.5, 19.5, 1.0];

let oDesconto = 10.0; // aplicando 10% de desconto

for (let shopee of oPrecos) {
 oDesconto = shopee * oPrecos;
};

console.log(oPrecos);

// acima antes...
// abaixo durante ...

const oPrecosX = [5.0, 6.0, 8.5, 19.5, 1.0];

let oDescontoX = 0.9; // Aplicando 10% de desconto

for (let [index, shopee] of oPrecosX.entries()) { // Pegar índice e valor ao mesmo tempo
    oPrecosX[index] = shopee * oDescontoX; // Aplicar o desconto no array original
}

console.log(oPrecosX);

// abaixo depois ...elegante 

const YoPrecos = [5.0, 6.0, 8.5, 19.5, 1.0];

let YoDesconto = 0.9; // Aplicando 10% de desconto

const YoPrecosComDesconto = YoPrecos.map(shopeee => shopeee * YoDesconto);

console.log(YoPrecosComDesconto);

// abaixo neuro javascript, mergulhe ...

const ToPrecos = [5.0, 6.0, 8.5, 19.5, 1.0];
const ToDesconto = 0.9; // Aplicando 10% de desconto

const ToPrecosComDesconto = ToPrecos.map(xp => xp * ToDesconto);

console.log(ToPrecosComDesconto);

// deep javascript ... termina aqui ! 10:15 




