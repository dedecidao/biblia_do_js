import inputRL from 'readline-sync';

let nome =  inputRL.question ("Digite o nome do aluno: ")
let idade = inputRL.question ("Digite a idade do aluno: ")
let email = inputRL.question ("Digite o email do aluno: ")


// O objeto assume as propriedades e pega os valores das variaveis enviadas pelo input
let aluno = {
    nome: nome,
    idade: idade,
    email: email
};

console.log("Nome: "+aluno.nome)
console.log("Idade: "+aluno.idade)
console.log("Email: "+aluno.email)