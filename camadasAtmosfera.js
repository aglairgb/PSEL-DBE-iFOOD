function determinarCamadasAtmosfera(altitude) {
    return altitude <=20 ? "TROPOSFERA" :
           altitude <=50 ? "ESTRATOSFERA" :
           altitude <= 80 ? "MESOSFERA" :
           altitude <= 450 ? "TERMOSFERA" :
           "EXOSFERA";
}

console.log(determinarCamadasAtmosfera(85));