// Ejercicio 24: Datos de viajes en arreglo

/*
ENTRADA:
viajes(leer) = [["A", 100, 15], ["C", 50, 30]]

PROCESO:
para i desde 0 hasta viajes.length
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

SALIDA:
El resultado de este ejercicio es:
"Viaje 1: Costo total $4000.00 – Costo por persona $266.67"
"Viaje 2: Costo total $4500.00 – Costo por persona $150.00"
*/

function datosViajesArreglo(viajes) {
    debugger;
    
    for (let i = 0; i < viajes.length; i++) {
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
    }
}

// Pruebas
console.log("=== Datos de viajes en arreglo ===");
datosViajesArreglo([["A", 100, 15], ["C", 50, 30]]);
datosViajesArreglo([["B", 80, 25], ["A", 60, 18]]);