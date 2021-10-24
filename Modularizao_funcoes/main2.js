import { valida_senha } from "./funcoes/funcoes.js";

let senha = "minhasenh";

if (valida_senha(senha)) {

    console.log("A senha possui no mínimo 10 caracteres");
} else {
    console.log("A senha não possui o mínimo 10 caracteres");
}