// -- Melhor arquivo para aprender a se tranalhar com Dates pówered by: @dedecidao

const dataDeHoje = new Date();

dataDeHoje.get
// console.log(dataDeHoje);


const dataDeOntem = new Date("2021-09-03"); // Passar os parametros da data especifica dentro de uma String

var timeStAtual = dataDeHoje.getTime();
var timeStOntem = dataDeOntem.getTime();

var diferencaTs = timeStAtual - timeStOntem;

var segundos = diferencaTs/1000; // Conversão de milisegundos para segundos
var minutos = segundos/60; //Conversão de segundos para minutos
var horas = minutos/100; //Conversão de minutos para horas

// console.log(dataDeHoje.getDate()); Controla a data de hoje

console.log(dataDeHoje.getFullYear());
console.log(dataDeHoje.getHours());
console.log(dataDeHoje.getDay()); // Dia da semana que vai de 0 começando padrão domingo a 6 
console.log(dataDeHoje.getMonth() + 1); //Mês vem indexado em 0 para ajudar nos loops
//console.log(dataDeAmanha);


//  console.log(dataDeHoje.toString());  // Captura a data de hoje com o timezone
//   console.log(dataDeHoje.toUTCString()); //Captura a data em UTC padrão universal


//Hora de Capturar a Unix Epoch da qual estamos agora!!!

//TimeStamp!!
//console.log(dataDeHoje.valueOf()); // É engraçado o fato de recuperar o timespact com Value Of mas por uma lado até que faz sentido pois teremos uma valor unico do instante do momento!

//É simplesmente incrivel ver ele mudando no terminal cada hora que executo-o



