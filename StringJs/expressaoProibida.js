let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim(); // Remove os espaços extras e vazio
comentario = comentario.toLowerCase(); // Passa o comentario para minusculo

if (comentario.indexOf(expressao_proibida) > -1) { //Metodo indexOf recebe como parametro uma expressao para procurar no texto caso não encontre ele retorna -1

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario); // venda de passaporte falso