const turmaJS = ['A', 'B', 'C', 'D', 'E'];
const turmaCSS = ['F', 'G', 'H', 'I', 'J'];
const turmaHTML = ['K', 'L', 'M', 'N', 'O'];
const turmaPython = ['P', 'Q', 'R', 'S', 'T'];
const turmaJava = ['U', 'V', 'W', 'X', 'Y','z'];

const brainstorming = turmaJS.concat(turmaCSS, turmaHTML, turmaPython, turmaJava);
console.log(brainstorming);


const carros = ['HB20', 'Gol', 'Celta', 'Uno', 'Fusca','Toyota Corolla'];
const motos = ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'Dafra'];

                      //   []   []       aaray de arrays
const estacionamento = [carros,motos];
console.log(estacionamento); 
console.log(`O carro do coração é ${estacionamento[0][5]}`);
console.log(`A moto do coração é ${estacionamento[1][0]}`);


const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];
 
const funcionarios = [nomes, idades, faculdade];// quadro geral 

const funcionarioDoMes = [nomes[1], idades[1], faculdade[1]];// destaque do mês

console.log(funcionarios);
console.log(funcionarioDoMes);
