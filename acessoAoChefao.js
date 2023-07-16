function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    return itensColetados.includes(itemNecessario1) && itensColetados.includes(itemNecessario2) &&
           itensColetados.includes(itemNecessario3) ? "PODE ENFRENTAR" :
           "NÃO PODE ENFRENTAR";
}

const itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"];

let itemNecessario1 = "capa";
let itemNecessario2 = "arco";
let itemNecessario3 = "remédio";

console.log(solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3));