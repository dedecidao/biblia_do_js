let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

for (let contador = 0; contador < meses.length; contador++) { //Não esquecer que os dois pontos são os separadaores na estrutura de repetição FOR

    console.log(meses[contador]);

    if (meses[contador] == "Junho") {
        break;
    }

}