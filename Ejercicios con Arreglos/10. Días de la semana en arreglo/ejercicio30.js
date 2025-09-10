// Ejercicio 30: Días de la semana en arreglo

/*
ENTRADA:
numeros(leer) = [1, 3, 7, 9]

PROCESO:
para i desde 0 hasta numeros.length
    numero = numeros[i]
    
    si numero = 1: dia = "Lunes"
    si numero = 2: dia = "Martes"
    si numero = 3: dia = "Miércoles"
    si numero = 4: dia = "Jueves"
    si numero = 5: dia = "Viernes"
    si numero = 6: dia = "Sábado"
    si numero = 7: dia = "Domingo"
    otro: dia = "Error"
    
    mostrar numero + " → " + dia

SALIDA:
El resultado de este ejercicio es:
"1 → Lunes"
"3 → Miércoles"
"7 → Domingo"
"9 → Error"
*/

function diasSemanaArreglo(numeros) {
    debugger;
    
    for (let i = 0; i < numeros.length; i++) {
        let numero = numeros[i];
        let dia;
        
        if (numero == 1) {
            dia = "Lunes";
        } else if (numero == 2) {
            dia = "Martes";
        } else if (numero == 3) {
            dia = "Miércoles";
        } else if (numero == 4) {
            dia = "Jueves";
        } else if (numero == 5) {
            dia = "Viernes";
        } else if (numero == 6) {
            dia = "Sábado";
        } else if (numero == 7) {
            dia = "Domingo";
        } else {
            dia = "Error";
        }
        
        console.log(`${numero} → ${dia}`);
    }
}

// Pruebas
console.log("=== Días de la semana en arreglo ===");
diasSemanaArreglo([1, 3, 7, 9]);
diasSemanaArreglo([2, 5, 8, 4]);