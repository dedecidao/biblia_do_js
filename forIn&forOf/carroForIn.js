let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for (let propriedade in carro) { //Propridade armazena as keys do objeto a cade interação

    if (propriedade == "preco") { //Quando chegamos na iteração de preço

        let preco = propriedade; // Guarda a Key preco para compararar

        let desconto = (carro[preco] * percentual_desconto) / 100;

        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else {

        console.log(propriedade + ": " + carro[propriedade]);

    }
}