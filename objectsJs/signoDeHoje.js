let colecao_signos = [
    { "Nome": "Aquário", "DataInicio": "01-20", "DataFim": "02-18" },
    { "Nome": "Peixes", "DataInicio": "02-19", "DataFim": "03-20" },
    { "Nome": "Áries", "DataInicio": "03-21", "DataFim": "04-19" },
    { "Nome": "Touro", "DataInicio": "04-20", "DataFim": "05-20" },
    { "Nome": "Gêmeos", "DataInicio": "05-21", "DataFim": "06-21" },
    { "Nome": "Câncer", "DataInicio": "06-22", "DataFim": "07-23" },
    { "Nome": "Leão", "DataInicio": "07-24", "DataFim": "08-22" },
    { "Nome": "Virgem", "DataInicio": "08-23", "DataFim": "09-22" },
    { "Nome": "Libra", "DataInicio": "09-23", "DataFim": "10-22" },
    { "Nome": "Escorpião", "DataInicio": "10-23", "DataFim": "11-21" },
    { "Nome": "Sagitário", "DataInicio": "11-22", "DataFim": "12-21" },
    { "Nome": "Capricórnio", "DataInicio": "12-22", "DataFim": "01-19" }
];

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
    if (tipo_comparacao == "and") {
        return (data >= data_inicio && data <= data_fim);
    } else {
        return (data >= data_inicio || data <= data_fim);
    }
}//end verifica_data_range


const retorna_signo = (signos, data) => {
    //let data = new Date("2020-02-07 00:00:00"); // Recebe uma data para comparar no range
    let ano = data.getFullYear();
    for (signo of signos) {
        //inputs
        let data_inicio_signo = new Date(ano + '-' + signo["DataInicio"] + " 00:00:00");
        let data_fim_signo = new Date(ano + '-' + signo["DataFim"] + " 00:00:00");
        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and"; //Atribui operador Or caso o signo seja de Capricornio

        if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) { //Dentro da condição do if é chamada uma função de callback nem sei que o é callback
            return signo["Nome"];
        }
    }//end percorrendo a coleção de signos como signo
}//end retorna_signo

let data_app = new Date("2020-12-30 00:00:00");



const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);