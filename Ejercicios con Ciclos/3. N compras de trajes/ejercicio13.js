// Ejercicio 13: N compras de trajes

/*
ENTRADA:
n(leer) = 2
precios(leer) = [3000, 2000]

PROCESO:
i = 0
mientras i < n
    si precios[i] > 2500: precioFinal = precios[i] - (precios[i] * 0.15)
    sino: precioFinal = precios[i] - (precios[i] * 0.08)
    mostrar "Traje " + (i+1) + ": $" + precioFinal
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"Traje 1: $2550.00"
"Traje 2: $1840.00"
*/

function nComprasTrajes(precios) {
    debugger;
    let i = 0;
    
    while (i < precios.length) {
        let precioFinal;
        
        if (precios[i] > 2500) {
            precioFinal = precios[i] - (precios[i] * 0.15);
        } else {
            precioFinal = precios[i] - (precios[i] * 0.08);
        }
        
        console.log(`Traje ${i + 1}: ${precioFinal.toFixed(2)}`);
        i++;
    }
}

// Pruebas
console.log("=== N compras de trajes ===");
nComprasTrajes([3000, 2000]);
nComprasTrajes([2800, 1500, 3500]);