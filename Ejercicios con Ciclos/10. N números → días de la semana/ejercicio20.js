// Ejercicio 20: N números → días de la semana

/*
ENTRADA:
n(leer) = 4
numeros(leer) = [1, 3, 7, 9]

PROCESO:
i = 0
mientras i < n
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
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"1 → Lunes"
"3 → Miércoles"
"7 → Domingo"
"9 → Error"
*/

function nNumerosDiasSemana(numeros) {
    debugger;
    let i = 0;
    
    while (i < numeros.length) {
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
        i++;
    }
}

// Pruebas
console.log("=== N números → días de la semana ===");
nNumerosDiasSemana([1, 3, 7, 9]);
nNumerosDiasSemana([2, 5, 8, 4]);