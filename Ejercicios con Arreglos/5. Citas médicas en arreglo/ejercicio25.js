// Ejercicio 25: Citas médicas en arreglo

/*
ENTRADA:
numerosCita(leer) = [1, 5, 9]

PROCESO:
para i desde 0 hasta numerosCita.length
    numeroCita = numerosCita[i]
    
    si numeroCita >= 1 y numeroCita <= 3: costoCita = 200
    si numeroCita >= 4 y numeroCita <= 5: costoCita = 150
    si numeroCita >= 6 y numeroCita <= 8: costoCita = 100
    si numeroCita >= 9: costoCita = 50
    
    acumulado = calcular suma de todas las citas desde 1 hasta numeroCita
    mostrar "Cita " + numeroCita + ": $" + costoCita + " – Acumulado: $" + acumulado

SALIDA:
El resultado de este ejercicio es:
"Cita 1: $200 – Acumulado: $200"
"Cita 5: $150 – Acumulado: $900"
"Cita 9: $50 – Acumulado: $1300"
*/

function citasMedicasArreglo(numerosCita) {
    debugger;
    
    for (let i = 0; i < numerosCita.length; i++) {
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
        for (let j = 1; j <= numeroCita; j++) {
            if (j >= 1 && j <= 3) {
                acumulado += 200;
            } else if (j >= 4 && j <= 5) {
                acumulado += 150;
            } else if (j >= 6 && j <= 8) {
                acumulado += 100;
            } else if (j >= 9) {
                acumulado += 50;
            }
        }
        
        console.log(`Cita ${numeroCita}: $${costoCita} – Acumulado: $${acumulado}`);
    }
}

// Pruebas
console.log("=== Citas médicas en arreglo ===");
citasMedicasArreglo([1, 5, 9]);
citasMedicasArreglo([3, 7, 12]);