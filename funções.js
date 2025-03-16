function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
};

const carro1 = new Carro('Toyota', 'Corolla', 2021);
const carro2 = new Carro('Honda', 'Civic', 2022);

console.log(carro1.marca + ' ' + carro1.modelo);
console.log(carro2.marca + ' ' + carro2.modelo);

function estudante (){
    console.log('Ricardo');
};
estudante();

function professora(nome){
    console.log(nome);
};
professora('Márcia');
professora('Helena');
professora('Nádia');

function professoras(nome, nota){
    console.log(nome, nota);
};
professoras('Márcia', 10);  // adivinhou a IA kkk
professoras('Helena', 9);
professoras('Nádia', 8);

// declaração da função
function calcularTresNumeros(numA, numB, numC) {
    return numA + numB * numC;
   };
   
   // execução (ou chamada) da função
   calcularTresNumeros(7, 3, 5); // ordem de precedencia * depois +
   
   // atribuindo o retorno de uma função a uma variável
   const resultado = calcularTresNumeros(7, 3, 5);
   console.log(resultado);

   function dividir(dividendo, divisor) {
    return dividendo / divisor;
   };
   const resultadoX = dividir(10, 2);
   console.log(`o resultado é ${resultadoX} !`); // o resultado é 5


   function R_dividir(dividendo, divisor) {
    dividendo / divisor;
   };
   const resultadoY = R_dividir(10, 2);
   console.log(`o resultado é ${resultadoY} ?`); // o resultado é undefined ou seja : faltou o return !
   //Lembrando que o return deve ser a última linha do bloco.



   function Ddividir(dividendo, divisor) {
    if (divisor !== 0) {
      return dividendo / divisor;
    } else {
      return 'favor não dividir por zero poxa!';
    }
   };
   
   const D_resultado = Ddividir(10, 5);
   console.log(D_resultado); // 2
   const OresultadoZero = Ddividir(21, 0);
   console.log(OresultadoZero); // 'favor não dividir por zero poxa!'

   
   function saudacao(nome) {
    return `Olá, ${nome}!`;
};

const mensagem = saudacao("Maria");
console.log(mensagem); // Olá, Maria!

/* A explicação : 
A variável mensagem armazena o valor retornado pela função saudacao, que cumprimenta a pessoa com o nome "Maria".
O código chama a função saudacao("Maria"), que retorna a saudação "Olá, Maria!". Esse valor retornado é atribuído à variável mensagem.
*/