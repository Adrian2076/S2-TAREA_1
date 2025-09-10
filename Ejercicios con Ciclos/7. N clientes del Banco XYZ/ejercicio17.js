// Ejercicio 17: N clientes del Banco XYZ

/*
ENTRADA:
n(leer) = 2
clientes(leer) = [[2, 1000], [3, 1500]]

PROCESO:
i = 0
mientras i < n
    tipoTarjeta = clientes[i][0]
    creditoActual = clientes[i][1]
    
    si tipoTarjeta = 1: nuevoCredito = creditoActual * 1.25
    si tipoTarjeta = 2: nuevoCredito = creditoActual * 1.35
    si tipoTarjeta = 3: nuevoCredito = creditoActual * 1.40
    otro: nuevoCredito = creditoActual * 1.50
    
    mostrar "Cliente " + (i+1) + ": Nuevo crédito $" + nuevoCredito
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"Cliente 1: Nuevo crédito $1350.00"
"Cliente 2: Nuevo crédito $2100.00"
*/

function nClientesBanco(clientes) {
    debugger;
    let i = 0;
    
    while (i < clientes.length) {
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
        i++;
    }
}

// Pruebas
console.log("=== N clientes del Banco XYZ ===");
nClientesBanco([[2, 1000], [3, 1500]]);
nClientesBanco([[1, 800], [4, 1200], [2, 2000]]);