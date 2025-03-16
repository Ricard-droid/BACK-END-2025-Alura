const listaDeEstudantes = [
    "Helena", "Chico", "Mário", "Sérgio", "Raquel", "Júlia", "Márcia",
    "Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel",
    "Heloísa", "Igor", "Joana", "Kleber", "Larissa", "Marcelo", "Natália",
    "Otávio", "Patrícia", "Quintino", "Renata", "Silvio", "Tatiana", "Ursula",
    "Vinícius", "Wagner"
];

const salaB = listaDeEstudantes.slice(0,listaDeEstudantes.length / 2);
const salaA = listaDeEstudantes.slice(listaDeEstudantes.length / 2);
const salaC = listaDeEstudantes.slice(1,listaDeEstudantes.length / 2);
console.log(salaC);
console.log(salaB);
console.log(salaA);