const carrinho = [
    { nome: 'The Legend of Zelda', qnt: 1, valor: 250 },
    { nome: 'Super Mario Kart 8', qnt: 1, valor: 300 },
    { nome: 'New Super Mario Bros.', qnt: 1, valor: 250 }
];

function imprimirItem(produto, index) {
    let texto = index + ' - ';
    texto += produto.qnt + ' UN - ';
    texto += produto.nome + ' - ';
    texto += 'R$ ' + produto.valor + ' - ';
    texto += 'R$ ' + produto.qnt * produto.valor;

    console.log(texto);
}

carrinho.forEach(imprimirItem);

// 0 - 1 UN - The Legend of Zelda - R$ 250 - R$ 250
// 1 - 1 UN - Super Mario Kart 8 - R$ 300 - R$ 300
// 2 - 1 UN - New Super Mario Bros. - R$ 250 - R$ 250