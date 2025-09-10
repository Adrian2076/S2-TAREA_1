// Ejercicio 27: Clientes del banco en arreglo

/*
ENTRADA:
clientes(leer) = [[2, 1000], [3, 1500]]

PROCESO:
para i desde 0 hasta clientes.length
    tipoTarjeta = clientes[i][0]
    creditoActual = clientes[i][1]
    
    si tipoTarjeta = 1: nuevoCredito = creditoActual * 1.25
    si tipoTarjeta = 2: nuevoCredito = creditoActual * 1.35
    si tipoTarjeta = 3: nuevoCredito = creditoActual * 1.40
    otro: nuevoCredito = creditoActual * 1.50
    
    mostrar "Cliente " + (i+1) + ": Nuevo crédito $" + nuevoCredito

SALIDA:
El resultado de este ejercicio es:
"Cliente 1: Nuevo crédito $1350.00"
"Cliente 2: Nuevo crédito $2100.00"
*/

function clientesBancoArreglo(clientes) {
    debugger;
    
    for (let i = 0; i < clientes.length; i++) {
        let tipoTarjeta = clientes[i][0];
        let creditoActual = clientes[i][1];
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
        
        console.log(`Cliente ${i + 1}: Nuevo crédito $${nuevoCredito.toFixed(2)}`);
    }
}

// Pruebas
console.log("=== Clientes del banco en arreglo ===");
clientesBancoArreglo([[2, 1000], [3, 1500]]);
clientesBancoArreglo([[1, 800], [4, 1200], [2, 2000]]);