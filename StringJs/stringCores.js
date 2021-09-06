// let cores = "verde azul branco amarelo preto";

// let array_cores = cores.split(" ");;//Gera um Array pelos espaços [verde, azul, branco, amarelo, preto]

// for (const cor of array_cores) {
//     if (cor.length > 5) {
//         console.log(" A cor " + cor + " tem mais que 5 caracteres");
//     } else {
//         console.log(" A cor " + cor + " NÃO tem mais que 5 caracteres");
//     }

// }

let
    label_nome
        = "Nome:";
let valor_nome = "Jorge Luiz";

let label_profissao = "Profissão:";
let
    valor_profissao
        = "Professor";

let label_endereco = "Endereço:";
let valor_endereco = "Rua Cruzeiro do Sul";

console.log(label_nome.padEnd(25, '.')
    + valor_nome
);
console.log(
    label_profissao.padEnd
        (25, '.') + valor_profissao);
console.log(
    label_endereco.padEnd
        (25, '.') + valor_endereco);