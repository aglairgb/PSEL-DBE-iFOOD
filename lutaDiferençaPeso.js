function solucao(pesos) {
    const diferenca = Math.abs(pesos[0] - pesos[1]);

    return diferenca <=5 ? "PODEM LUTAR" :
           "NÃO PODEM LUTAR";
}

let pesos = [50, 56];
let resultado = solucao(pesos);
console.log(resultado);