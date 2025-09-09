// Ejercicio 10: Número equivalente a días de la semana
/*
ENTRADA:
numero(leer) = 3, 1, 7, 9

PROCESO:
si numero = 1: dia = "Lunes"
si numero = 2: dia = "Martes"
si numero = 3: dia = "Miércoles"
si numero = 4: dia = "Jueves"
si numero = 5: dia = "Viernes"
si numero = 6: dia = "Sábado"
si numero = 7: dia = "Domingo"
otro: dia = "Número no válido"

SALIDA:
El resultado de este ejercicio es:
"Miércoles"
"Lunes"
"Domingo"
"Número no válido"
*/
function numeroDiaSemana(numero) {
    debugger;
    if (numero == 1) {
        return "Lunes";
    } else if (numero == 2) {
        return "Martes";
    } else if (numero == 3) {
        return "Miércoles";
    } else if (numero == 4) {
        return "Jueves";
    } else if (numero == 5) {
        return "Viernes";
    } else if (numero == 6) {
        return "Sábado";
    } else if (numero == 7) {
        return "Domingo";
    } else {
        return "Número no válido";
    }
}

// Pruebas
console.log(numeroDiaSemana(3));
console.log(numeroDiaSemana(1));
console.log(numeroDiaSemana(7));
console.log(numeroDiaSemana(9));