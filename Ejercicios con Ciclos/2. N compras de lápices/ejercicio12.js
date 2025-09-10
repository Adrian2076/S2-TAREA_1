// Ejercicio 12: N compras de lápices

/*
ENTRADA:
n(leer) = 2
cantidades(leer) = [1200, 800]

PROCESO:
i = 0
mientras i < n
    si cantidades[i] >= 1000: precio = cantidades[i] * 0.85
    sino: precio = cantidades[i] * 0.90
    mostrar "Pedido " + (i+1) + ": $" + precio
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"Pedido 1: $1020.00"
"Pedido 2: $720.00"
*/

function nComprasLapices(cantidades) {
    debugger;
    let i = 0;
    
    while (i < cantidades.length) {
        let precio;
        
        if (cantidades[i] >= 1000) {
            precio = cantidades[i] * 0.85;
        } else {
            precio = cantidades[i] * 0.90;
        }
        
        console.log(`Pedido ${i + 1}: $${precio.toFixed(2)}`);
        i++;
    }
}

// Pruebas
console.log("=== N compras de lápices ===");
nComprasLapices([1200, 800]);
nComprasLapices([500, 1500, 300]);