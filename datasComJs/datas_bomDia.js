const dataAtual = new Date();

dataAtual.setHours(11);
var hora = dataAtual.getHours();


if(hora <= 6 || hora > 18){
    msg = 'Boa noite\n';
} else if(hora > 6 && hora < 12) {
    msg = 'Bom dia\n';
} else {
    msg = 'Boa tarde\n';
}

console.log(msg);