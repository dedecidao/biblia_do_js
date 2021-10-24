const jogos = [
    { id: 1, nome: 'Galaxian', ano_lancamento: 1979 },
    { id: 2, nome: 'Donkey Kong', ano_lancamento: 1981 },
    { id: 3, nome: 'Ms. Pac-Man', ano_lancamento: 1981 },
    { id: 4, nome: 'Asteroids', ano_lancamento: 1979 }
];


function retornaNomeJogos(nomes, jogo) {
    return nomes + jogo.nome + ', ';
}


const nomesJogos = jogos.reduce(retornaNomeJogos, '');

console.log(nomesJogos);