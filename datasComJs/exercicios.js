var usuario = {
    id: 2,
    nome: "Andre Luis Araujo",
    idade: 18
};

var atendeAClassificacaoEtaria = usuario.idade >= 18

if ( atendeAClassificacaoEtaria === true ) {

    console.log("O usuário pode assistir o conteúdo");

} else {

    console.log("O usuário ainda não pode assistir o conteúdo");

}