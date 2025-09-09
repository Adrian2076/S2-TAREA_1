// Ejercicio 3: Descuento en trajes
/*
ENTRADA:
precio(leer) = 3000, 2000

PROCESO:
si precio > 2500
    precioFinal = precio - (precio * 0.15)
sino
    precioFinal = precio - (precio * 0.08)

SALIDA:
El resultado de este ejercicio es:
"Precio final: $2550.00"
"Precio final: $1840.00"
*/
function descuentoTrajes(precio) {
    debugger;
    let precioFinal;
    
    if (precio > 2500) {
        precioFinal = precio - (precio * 0.15);
    } else {
        precioFinal = precio - (precio * 0.08);
    }
    
    return `Precio final: $${precioFinal.toFixed(2)}`;
}

// Pruebas
console.log(descuentoTrajes(3000));
console.log(descuentoTrajes(2000));