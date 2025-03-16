const carros = ["Fusca", "Gol", "Civic", "Corolla", "Mustang", "Camaro", "Ferrari", "Porsche", "Lamborghini", "Tesla"];
const ano = [1960, 1980, 2000, 2026, 2022, 2024, 2020, 2028, 2030, 2032];

const garagem = [carros, ano];
function carroDoAno(veiculo) {
    if (garagem [0]. includes (veiculo)){
        const indice = garagem[0].indexOf(veiculo);
        const ano = garagem[1][indice];
        console.log(`O meu carro do ano é ${veiculo} e foi comprado em ${ano} em nome de Jesus !`);
    } else {
        console.log('Carro não encontrado');
    }
    
}; console.log('ONTEM...');
carroDoAno("FERRARI", 2050);

   console.log('HOJE...');
carroDoAno("Corolla", 2026);

   console.log('AMANHÃ...');
   console.log('DEUS proverá ! 2027');