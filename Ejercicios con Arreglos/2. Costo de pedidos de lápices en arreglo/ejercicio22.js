// Ejercicio 22: Costo de pedidos de lápices en arreglo

/*
ENTRADA:
cantidades(leer) = [1200, 800]

PROCESO:
para i desde 0 hasta cantidades.length
    si cantidades[i] >= 1000: precio = cantidades[i] * 0.85
    sino: precio = cantidades[i] * 0.90
    mostrar "Pedido " + (i+1) + ": $" + precio

SALIDA:
El resultado de este ejercicio es:
"Pedido 1: $1020.00"
"Pedido 2: $720.00"
*/

function costoPedidosLapicesArreglo(cantidades) {
    debugger;
    
    for (let i = 0; i < cantidades.length; i++) {
        let precio;
        
        if (cantidades[i] >= 1000) {
            precio = cantidades[i] * 0.85;
        } else {
            precio = cantidades[i] * 0.90;
        }
        
        console.log(`Pedido ${i + 1}: $${precio.toFixed(2)}`);
    }
}

// Pruebas
console.log("=== Costo de pedidos de lápices en arreglo ===");
costoPedidosLapicesArreglo([1200, 800]);
costoPedidosLapicesArreglo([500, 1500, 300]);