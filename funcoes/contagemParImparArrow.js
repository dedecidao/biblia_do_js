// Este exemplo aplica a função arrow.


lista_numeros = [1, 2, 3, 7, 9, 12, 15, 18, 125, 135561, 5165, 165165, 65156, 1651, 1651, 165, 1561, 156116];

const total_impares_pares = (numeros) => { // Sintaxe de uma arrow function

    //Variaveis declaradas dentro da Arrow Function
    let impares = 0;
    let pares = 0;

    for (const numero of numeros) {

        if (numero % 2 == 0) {
            pares++;
        } else {
            impares++;
        }

    }

    console.log("O total de números ímpares é: " + impares);
    console.log("O total de números pares é: " + pares);
}

total_impares_pares(lista_numeros);