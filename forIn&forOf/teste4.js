let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

let total_meses = meses.length;

for (let contador = 0; contador < total_meses; contador++) {

    console.log(meses[contador]);

    if (meses[contador] == "Junho") {
        break;
    }

}