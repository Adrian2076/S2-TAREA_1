// Ejercicio 4: Costo de viaje por autobuses
/*
ENTRADA:
tipoAutobus(leer) = "A", "C"
distancia(leer) = 100, 50
cantidadPersonas(leer) = 15, 30

PROCESO:
si tipoAutobus = "A": tarifaPorKm = 2.0
si tipoAutobus = "B": tarifaPorKm = 2.5
si tipoAutobus = "C": tarifaPorKm = 3.0

si cantidadPersonas < 20: personasACobrar = 20
sino: personasACobrar = cantidadPersonas

costoTotal = distancia * personasACobrar * tarifaPorKm
costoPorPersona = costoTotal / cantidadPersonas

SALIDA:
El resultado de este ejercicio es:
"Costo total: $4000.00 – Costo por persona: $266.67"
"Costo total: $4500.00 – Costo por persona: $150.00"
*/
function costoViajeAutobus(tipoAutobus, distancia, cantidadPersonas) {
    debugger;
    let tarifaPorKm;
    
    if (tipoAutobus == 'A') {
        tarifaPorKm = 2.0;
    } else if (tipoAutobus == 'B') {
        tarifaPorKm = 2.5;
    } else if (tipoAutobus == 'C') {
        tarifaPorKm = 3.0;
    }
    
    let personasACobrar = cantidadPersonas;
    if (cantidadPersonas < 20) {
        personasACobrar = 20;
    }
    
    let costoTotal = distancia * personasACobrar * tarifaPorKm;
    let costoPorPersona = costoTotal / cantidadPersonas;
    
    return `Costo total: $${costoTotal.toFixed(2)} – Costo por persona: $${costoPorPersona.toFixed(2)}`;
}

// Pruebas
console.log(costoViajeAutobus('A', 100, 15));
console.log(costoViajeAutobus('C', 50, 30));