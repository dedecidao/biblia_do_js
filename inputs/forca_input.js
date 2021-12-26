import rlsync from 'readline-sync';

let massa =  rlsync.question('Informe a massa: ');
let aceleracao = rlsync.question('Informe a aceleração: ');

let forca = massa * aceleracao;

console.log(forca+" N");