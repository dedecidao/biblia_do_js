import input from '-sync';

console.log("Conversor de Celsius para Kelvin: \n");

let C = input.question("Informe o valor em Celsius: ");

let K = Number(C) + 273.15;

console.log(C + "ºC equivale a " + K + "K");