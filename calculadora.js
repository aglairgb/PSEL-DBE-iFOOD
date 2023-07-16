function solucao(numero1, numero2, operacao) {
    return operacao === "soma" ? numero1 + numero2 :
           operacao === "subtração" ? numero1 - numero2 :
           operacao === "multiplicação" ? numero1 * numero2 :
           operacao === "divisão" ? numero1/numero2 :
           "ERRO";
}

let resultado= solucao(10, 2, "divisão");
console.log(resultado);

