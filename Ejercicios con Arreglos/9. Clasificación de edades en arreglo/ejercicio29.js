// Ejercicio 29: Clasificación de edades en arreglo

/*
ENTRADA:
edades(leer) = [3, 15, 70]

PROCESO:
para i desde 0 hasta edades.length
    edad = edades[i]
    
    si edad >= 1 y edad <= 3: categoria = "Infante"
    si edad >= 4 y edad <= 13: categoria = "Niño"
    si edad >= 14 y edad <= 17: categoria = "Adolescente"
    si edad >= 18 y edad <= 35: categoria = "Joven"
    si edad >= 36 y edad <= 64: categoria = "Adulto"
    si edad >= 65: categoria = "Adulto mayor"
    
    mostrar edad + " → " + categoria

SALIDA:
El resultado de este ejercicio es:
"3 → Infante"
"15 → Adolescente"
"70 → Adulto mayor"
*/

function clasificacionEdadesArreglo(edades) {
    debugger;
    
    for (let i = 0; i < edades.length; i++) {
        let edad = edades[i];
        let categoria;
        
        if (edad >= 1 && edad <= 3) {
            categoria = "Infante";
        } else if (edad >= 4 && edad <= 13) {
            categoria = "Niño";
        } else if (edad >= 14 && edad <= 17) {
            categoria = "Adolescente";
        } else if (edad >= 18 && edad <= 35) {
            categoria = "Joven";
        } else if (edad >= 36 && edad <= 64) {
            categoria = "Adulto";
        } else if (edad >= 65) {
            categoria = "Adulto mayor";
        }
        
        console.log(`${edad} → ${categoria}`);
    }
}

// Pruebas
console.log("=== Clasificación de edades en arreglo ===");
clasificacionEdadesArreglo([3, 15, 70]);
clasificacionEdadesArreglo([5, 25, 45, 80]);