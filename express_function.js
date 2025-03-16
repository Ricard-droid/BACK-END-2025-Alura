const estudanteReprovou = function (notafinal, faltas){
    if (notafinal >= 60 && faltas <= 3){
        return "Aprovado";
    } else if (notafinal >= 50 && faltas > 15){
        return "Reprovado por faltas";
    } else if (notafinal < 50 && faltas <= 15){
        return "Reprovado por nota";
    } else {
        return "Reprovado por nota e faltas";
    }
};

console.log(estudanteReprovou(70, 2)); // Aprovado
console.log(estudanteReprovou(40, 10)); // Reprovado por nota
console.log(estudanteReprovou(60, 20)); // Reprovado por faltas
console.log(estudanteReprovou(30, 20)); // Reprovado por nota e faltas

console.log('---------------------------------------------');
console.log('COLEGIO TIRADENTES 2025 - RICARDO J MARÇAL');
console.log('---------------------------------------------');


function calculaProduto(a, b = 2, c = 1) {
    return a * b * c;
  }
  
  const resultado1 = calculaProduto(3);
  const resultado2 = calculaProduto(2, 4);
  const resultado3 = calculaProduto(1, 2, 3);
  const resultado4 = calculaProduto(2, undefined, 5);
  
  console.log("Resultado 1:", resultado1);
  console.log("Resultado 2:", resultado2);
  console.log("Resultado 3:", resultado3);
  console.log("Resultado 4:", resultado4);