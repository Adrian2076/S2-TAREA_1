// Ejercicio 5: Consultorio médico - costo de citas
/*
ENTRADA:
numeroCita(leer) = 5, 10

PROCESO:
si numeroCita >= 1 y numeroCita <= 3: costoCita = 200
si numeroCita >= 4 y numeroCita <= 5: costoCita = 150
si numeroCita >= 6 y numeroCita <= 8: costoCita = 100
si numeroCita >= 9: costoCita = 50

acumulado = sumar todos los costos desde cita 1 hasta numeroCita

SALIDA:
El resultado de este ejercicio es:
"Costo cita 5: $150 – Acumulado: $900"
"Costo cita 10: $50 – Acumulado: $1300"
*/
function costoCitaMedica(numeroCita) {
    debugger;
    let costoCita;
    let acumulado = 0;
    
    // Calcular costo de la cita actual
    if (numeroCita >= 1 && numeroCita <= 3) {
        costoCita = 200;
    } else if (numeroCita >= 4 && numeroCita <= 5) {
        costoCita = 150;
    } else if (numeroCita >= 6 && numeroCita <= 8) {
        costoCita = 100;
    } else if (numeroCita >= 9) {
        costoCita = 50;
    }
    
    // Calcular acumulado
    for (let i = 1; i <= numeroCita; i++) {
        if (i >= 1 && i <= 3) {
            acumulado += 200;
        } else if (i >= 4 && i <= 5) {
            acumulado += 150;
        } else if (i >= 6 && i <= 8) {
            acumulado += 100;
        } else if (i >= 9) {
            acumulado += 50;
        }
    }
    
    return `Costo cita ${numeroCita}: $${costoCita} – Acumulado: $${acumulado}`;
}

// Pruebas
console.log(costoCitaMedica(5));
console.log(costoCitaMedica(10));