var aluno_academia = {
    id: 10,
    nome: "Gerson Silva Campos",
    altura: 1.75,
    peso: 69
};

var imc_aluno = aluno_academia.peso / (aluno_academia.altura * aluno_academia.altura);

console.log("O IMC do aluno é de: " + imc_aluno.toFixed(2)); // A função toFixed determina quantas casas decimais depois da virgula o resultado terá.

if ( imc_aluno < 18.5 ) {
    console.log("O aluno " + aluno_academia.nome + " está abaixo do peso");
} else if( imc_aluno >= 18.5 && imc_aluno <= 24.99) {
    console.log("O aluno " + aluno_academia.nome + " está com o peso normal");
} else {
    console.log("O aluno " + aluno_academia.nome + " está acima do peso");
}

// O IMC do aluno é de: 22.53061224489796
// O aluno Gerson Silva Campos está com o peso normal