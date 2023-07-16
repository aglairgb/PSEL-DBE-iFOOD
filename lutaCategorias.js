/* Peso leve: <55kg
   Peso meio-médio: >=55kg <65kg
   Peso médio: >=65kg <75kg
   Peso meio-pesado: >=75kg <85kg
   Peso pesado: >=85kg  
*/

function solucao(peso1, peso2) {
    return (peso1 < 55 && peso2 < 55) ? "PODEM LUTAR" :
        ((peso1 >= 55 && peso1 < 65) && (peso2 >= 55 && peso2 < 65)) ||
        ((peso1 >= 65 && peso1 < 75) && (peso2 >= 65 && peso2 < 75)) ||
        ((peso1 >= 75 && peso1 < 85) && (peso2 >= 75 && peso2 < 85)) ||
        (peso1 >= 85 && peso2 >= 85) ? "PODEM LUTAR" :
        "NAO PODEM LUTAR";
}

console.log(solucao(54, 55)); 

