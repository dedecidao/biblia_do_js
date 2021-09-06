// 
// Este programa realiza o lançamento aleatorio de um dado usando as bibliotecas Math.floor e Math.random() combinadas.
// 




var dado = [
    1,      //0 index
    2,
    3,
    4,
    5,
    6   ];

console.log(dado.length);
var sorteio = Math.floor(Math.random() * dado.length + 1);
console.log(sorteio);