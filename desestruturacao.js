const carros = ["Fusca", "Gol", "Civic", "Corolla", "Mustang", "Camaro", "Ferrari", "Porsche", "Lamborghini", "Tesla"];
const ano = [1960, 1980, 2000, 2026, 2022, 2024, 2020, 2028, 2030, 2032];

const garagem = [carros, ano];
function carroDoAno(veiculo) {
    if (garagem [0]. includes (veiculo)){
        const [carros, ano] = garagem
        const indice = carros.indexOf(veiculo);
        const anoList = ano[indice];
        console.log(`O meu carro do ano é ${veiculo} e foi comprado em ${anoList} em nome de Jesus !`);
    } else {
        console.log('Carro não encontrado');
    }
}; console.log('ONTEM...');
carroDoAno("FERRARI", 2050);

   console.log('HOJE...');
carroDoAno("Porsche", 2028);

   console.log('AMANHÃ...');
   console.log('DEUS proverá ! 2029'); // gosto de ano ímpar * progresso ...

   //Você aprendeu como utilizar o recurso de desestruturação (ou destructuring, em inglês) do JavaScript em arrays.

   //toBeContinued...

   const [profgata = 'Márcia Dias'] = [];
   console.log(profgata);

   const Z= [x1,x2,x3,... outrosNúmeros] = [75,72,73];
   console.log(x1, x2, x3); // está bom !
