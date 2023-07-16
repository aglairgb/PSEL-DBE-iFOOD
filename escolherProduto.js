let precoProduto1 = 15.29;
let precoProduto2 = 1.8;
let precoProduto3 = 4.85;
let custo = 0;

if (precoProduto1 <= 18) {
  console.log("Comprei o produto 1");
  custo += precoProduto1;  // mesma coisa que -> custo = custo + precoProduto1;
} 

if (precoProduto2 < 3) {
  if (precoProduto2 >= 1.5) {
    console.log("Comprei o produto 2");
    custo += precoProduto2;
  } else {
    console.log("Tem algo errado com o produto 2");
  }
}

console.log("Comprei o produto 3");
custo += precoProduto3;

console.log(`O Valor total gasto foi R$ ${(custo).toFixed(2)} reais.`)


