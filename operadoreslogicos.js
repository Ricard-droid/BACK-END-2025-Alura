const idade = 25;
const possuiCarteira = false;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
};


const temExperiencia = false;
const temDiploma = true;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
};


const chuva = true;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
};

// O operador ! (NÃO lógico ou negação) inverte o valor do operando. Se o operando for true, ! retorna false. 
// Se o operando for false, ! retorna true.