// Ejercicio 15: N pacientes en consultorio

/*
ENTRADA:
n(leer) = 3
numerosCita(leer) = [1, 5, 9]

PROCESO:
i = 0
mientras i < n
    numeroCita = numerosCita[i]
    
    si numeroCita >= 1 y numeroCita <= 3: costoCita = 200
    si numeroCita >= 4 y numeroCita <= 5: costoCita = 150
    si numeroCita >= 6 y numeroCita <= 8: costoCita = 100
    si numeroCita >= 9: costoCita = 50
    
    acumulado = calcular suma de todas las citas desde 1 hasta numeroCita
    mostrar "Cita " + numeroCita + ": $" + costoCita + " – Acumulado: $" + acumulado
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"Cita 1: $200 – Acumulado: $200"
"Cita 5: $150 – Acumulado: $900"
"Cita 9: $50 – Acumulado: $1300"
*/

function nPacientesConsultorio(numerosCita) {
    debugger;
    let i = 0;
    
    while (i < numerosCita.length) {
        let numeroCita = numerosCita[i];
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
        let j = 1;
        while (j <= numeroCita) {
            if (j >= 1 && j <= 3) {
                acumulado += 200;
            } else if (j >= 4 && j <= 5) {
                acumulado += 150;
            } else if (j >= 6 && j <= 8) {
                acumulado += 100;
            } else if (j >= 9) {
                acumulado += 50;
            }
            j++;
        }
        
        console.log(`Cita ${numeroCita}: $${costoCita} – Acumulado: $${acumulado}`);
        i++;
    }
}

// Pruebas
console.log("=== N pacientes en consultorio ===");
nPacientesConsultorio([1, 5, 9]);
nPacientesConsultorio([3, 7, 12]);