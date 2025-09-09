// Ejercicio 9: Clasificación de edades
/*
ENTRADA:
edad(leer) = 70, 3, 15, 25

PROCESO:
si edad >= 1 y edad <= 3: categoria = "Infante"
si edad >= 4 y edad <= 13: categoria = "Niño"
si edad >= 14 y edad <= 17: categoria = "Adolescente"
si edad >= 18 y edad <= 35: categoria = "Joven"
si edad >= 36 y edad <= 64: categoria = "Adulto"
si edad >= 65: categoria = "Adulto mayor"

SALIDA:
El resultado de este ejercicio es:
"Adulto mayor"
"Infante"
"Adolescente"
"Joven"
*/
function clasificarEdad(edad) {
    debugger;
    if (edad >= 1 && edad <= 3) {
        return "Infante";
    } else if (edad >= 4 && edad <= 13) {
        return "Niño";
    } else if (edad >= 14 && edad <= 17) {
        return "Adolescente";
    } else if (edad >= 18 && edad <= 35) {
        return "Joven";
    } else if (edad >= 36 && edad <= 64) {
        return "Adulto";
    } else if (edad >= 65) {
        return "Adulto mayor";
    }
}

// Pruebas
console.log(clasificarEdad(70));
console.log(clasificarEdad(3));
console.log(clasificarEdad(15));
console.log(clasificarEdad(25));