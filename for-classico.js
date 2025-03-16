const notasEscolares = [10.0,8.5,7.0,6.0,9.5,9.0,7.5,9.8];

// R= variável iniciada  
// R< = condição de execução
// R++ incrementador ao final do bloco 
// saída : índice / console ( percorre array )

for (let R = 0; R < notasEscolares.length; R++) {
	console.log(R, notasEscolares[R]);
};

for (let indice = 0; indice <= 5; indice++) {
    console.log(indice);
  };

  // não execute este código! Loop infinito ...
//for (let indice = 0; indice <= 10; ) {
   // console.log(indice);
 // };

 //outro Loop infinito ... !

 // não execute este código!
//for (let indice = 0; ; indice++) {
    //console.log(indice);
 //};

 // Loop infinito : alterações na variável !

 // não execute este código!
//for (let indice = 0; indice < 10; indice++) {
   // indice--;
    //console.log(indice);
 // };


 //IMPORTANTE: Como mencionamos acima, o loop infinito pode travar o terminal ou computador. 
 // Se durante seus estudos você perceber que executou um código com loop infinito, 
 // finalize a execução do programa o mais rápido possível no terminal pressionando ... “Ctrl + C”.
