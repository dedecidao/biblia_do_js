
// Uso dor off para leitura de uma coleção de objetos e ir iterando

const alunosAv1 = [
    { nome: 'Ana', nota: 10 },
    { nome: 'Maria Eduarda', nota: 10 },
    { nome: 'Tiago', nota: 10 },
    { nome: 'Yuri', nota: 9 },
];

const qntAlunos = alunosAv1.length;
let somaNotas = 0;

for (const aluno of alunosAv1) {
    somaNotas += aluno.nota;
}

const media = somaNotas / alunosAv1.length;

console.log(media);