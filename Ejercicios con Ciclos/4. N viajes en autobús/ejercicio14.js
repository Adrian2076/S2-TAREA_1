// Ejercicio 14: N viajes en autobús

/*
ENTRADA:
n(leer) = 2
viajes(leer) = [["A", 100, 15], ["C", 50, 30]]

PROCESO:
i = 0
mientras i < n
    tipo = viajes[i][0]
    distancia = viajes[i][1]
    personas = viajes[i][2]
    
    si tipo = "A": tarifa = 2.0
    si tipo = "B": tarifa = 2.5
    si tipo = "C": tarifa = 3.0
    
    si personas < 20: personasACobrar = 20
    sino: personasACobrar = personas
    
    costoTotal = distancia * personasACobrar * tarifa
    costoPorPersona = costoTotal / personas
    
    mostrar "Viaje " + (i+1) + ": Costo total $" + costoTotal + " – Costo por persona $" + costoPorPersona
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"Viaje 1: Costo total $4000.00 – Costo por persona $266.67"
"Viaje 2: Costo total $4500.00 – Costo por persona $150.00"
*/

function nViajesAutobus(viajes) {
    debugger;
    let i = 0;
    
    while (i < viajes.length) {
        let tipo = viajes[i][0];
        let distancia = viajes[i][1];
        let personas = viajes[i][2];
        let tarifa;
        
        if (tipo == "A") {
            tarifa = 2.0;
        } else if (tipo == "B") {
            tarifa = 2.5;
        } else if (tipo == "C") {
            tarifa = 3.0;
        }
        
        let personasACobrar = personas;
        if (personas < 20) {
            personasACobrar = 20;
        }
        
        let costoTotal = distancia * personasACobrar * tarifa;
        let costoPorPersona = costoTotal / personas;
        
        console.log(`Viaje ${i + 1}: Costo total $${costoTotal.toFixed(2)} – Costo por persona $${costoPorPersona.toFixed(2)}`);
        i++;
    }
}

// Pruebas
console.log("=== N viajes en autobús ===");
nViajesAutobus([["A", 100, 15], ["C", 50, 30]]);
nViajesAutobus([["B", 80, 25], ["A", 60, 18]]);