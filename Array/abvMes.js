const meses = [
    "Janeiro", "Feveiro", "Marco", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// function abreviar(mes) { //Função vai recebendo um por um do indice de acordo com o map
//     return mes.substr(0, 3);
// }
const abreviar = mes => mes.substr(0, 3) // Con

const abreviado = meses.map(abreviar);

console.log(abreviado);

