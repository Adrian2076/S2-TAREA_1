// Ejercicio 7: Banco XYZ - aumento de crédito
/*
ENTRADA:
tipoTarjeta(leer) = 2, 3
creditoActual(leer) = 1000, 1500

PROCESO:
si tipoTarjeta = 1: nuevoCredito = creditoActual * 1.25
si tipoTarjeta = 2: nuevoCredito = creditoActual * 1.35
si tipoTarjeta = 3: nuevoCredito = creditoActual * 1.40
otro: nuevoCredito = creditoActual * 1.50

SALIDA:
El resultado de este ejercicio es:
"Nuevo crédito: $1350.00"
"Nuevo crédito: $2100.00"
*/
function aumentoCredito(tipoTarjeta, creditoActual) {
    debugger;
    let nuevoCredito;
    
    if (tipoTarjeta == 1) {
        nuevoCredito = creditoActual * 1.25;
    } else if (tipoTarjeta == 2) {
        nuevoCredito = creditoActual * 1.35;
    } else if (tipoTarjeta == 3) {
        nuevoCredito = creditoActual * 1.40;
    } else {
        nuevoCredito = creditoActual * 1.50;
    }
    
    return `Nuevo crédito: $${nuevoCredito.toFixed(2)}`;
}

// Pruebas
console.log(aumentoCredito(2, 1000));
console.log(aumentoCredito(3, 1500));