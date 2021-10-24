

//Input
var numeroAoQuadrado = [];
var lista_numeros = [1, 2, 3, 7, 9, 12, 15, 18];

const elevaQuadrado = (numero) => {
    numeroAoQuadrado.push(Math.pow(numero, 2));
}

lista_numeros.forEach(elevaQuadrado);

console.log("Output: " + numeroAoQuadrado);


//App
//elevaQuadrado(lista_numeros);