// Ejercicio 23: Precios de trajes en arreglo

/*
ENTRADA:
precios(leer) = [3000, 2000]

PROCESO:
para i desde 0 hasta precios.length
    si precios[i] > 2500: precioFinal = precios[i] - (precios[i] * 0.15)
    sino: precioFinal = precios[i] - (precios[i] * 0.08)
    mostrar "Traje " + (i+1) + ": $" + precioFinal

SALIDA:
El resultado de este ejercicio es:
"Traje 1: $2550.00"
"Traje 2: $1840.00"
*/

function preciosTrajesArreglo(precios) {
    debugger;
    
    for (let i = 0; i < precios.length; i++) {
        let precioFinal;
        
        if (precios[i] > 2500) {
            precioFinal = precios[i] - (precios[i] * 0.15);
        } else {
            precioFinal = precios[i] - (precios[i] * 0.08);
        }
        
        console.log(`Traje ${i + 1}: $${precioFinal.toFixed(2)}`);
    }
}

// Pruebas
console.log("=== Precios de trajes en arreglo ===");
preciosTrajesArreglo([3000, 2000]);
preciosTrajesArreglo([2800, 1500, 3500]);