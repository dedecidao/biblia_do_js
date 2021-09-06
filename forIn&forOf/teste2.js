let aluno = {
    nome: "Marcos",   // propriedade 0 que será armazenada em dados na primeira iteração
    email: "marcos@email.com",
    idade: 25
}

for (let dados in aluno) {
    console.log(aluno[dados]);  // [ ] chaves são usadas para acessar o valor dentro da propriedade
}