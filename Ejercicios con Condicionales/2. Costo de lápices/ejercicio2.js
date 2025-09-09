// Ejercicio 2: Costo de lápices
/*
ENTRADA:
cantidad(leer) = 1200, 800

PROCESO:
si cantidad >= 1000
    precio = cantidad * 0.85
sino
    precio = cantidad * 0.90

SALIDA:
El resultado de este ejercicio es:
"Total a pagar: $1020.00"
"Total a pagar: $720.00"
*/
function costoLapices(cantidad) {
    debugger;
    let precio;
    
    if (cantidad >= 1000) {
        precio = cantidad * 0.85;
    } else {
        precio = cantidad * 0.90;
    }
    
    return `Total a pagar: $${precio.toFixed(2)}`;
}

// Pruebas
console.log(costoLapices(1200));
console.log(costoLapices(800));