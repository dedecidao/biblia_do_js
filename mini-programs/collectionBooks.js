var livros = [
    {id: 1, nome: "Dom Quixote",    numero_paginas: 863}, // 0 indexed
    {id: 2, nome: "O senhor dos aneis",    numero_paginas: 863},
    {id: 3, nome: "As cronicas de narnia",    numero_paginas: 863},
    {id: 4, nome: "O caçãdor de pipas",    numero_paginas: 863},
    {id: 5, nome: "A montanha magia",    numero_paginas: 863},

];

var total_livros = livros.length;


var primeiro_livro = livros[0];
var ultimo_livro = livros[4];

console.log("O total de livros e: " + total_livros);
console.log("O nome do primeiro livro e " + primeiro_livro.nome);
console.log("O nome do ultimo livro e " + ultimo_livro.nome);