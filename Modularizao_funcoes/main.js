import { soma_numeros, subtracao_numeros } from './funcoes/funcoes.js';


//Funcao main que comeca apos a importacao das bibliotecas



//Input
let numero_1 = 8;
let numero_2 = 4;

//Chamada dos modulos
const soma = soma_numeros(numero_1, numero_2);
const subtracao = subtracao_numeros(numero_1, numero_2);


//Output
console.log("A soma entre os números é: " + soma);
console.log("A subtração entre os números é: " + subtracao);