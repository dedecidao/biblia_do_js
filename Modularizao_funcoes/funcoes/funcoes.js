function soma_numeros(num1, num2) {
    return num1 + num2;
}
function subtracao_numeros(num1, num2) {
    return num1 - num2;
}

const
    valida_senha = (senha) => {

        if (senha.length
            >= 10
        ) {
            return true;
        } else {
            return false;
        }

    }

export { soma_numeros, subtracao_numeros, valida_senha };