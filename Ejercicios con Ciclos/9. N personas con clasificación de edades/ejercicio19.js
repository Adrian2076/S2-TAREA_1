// Ejercicio 19: N personas con clasificación de edades

/*
ENTRADA:
n(leer) = 3
edades(leer) = [3, 15, 70]

PROCESO:
i = 0
mientras i < n
    edad = edades[i]
    
    si edad >= 1 y edad <= 3: categoria = "Infante"
    si edad >= 4 y edad <= 13: categoria = "Niño"
    si edad >= 14 y edad <= 17: categoria = "Adolescente"
    si edad >= 18 y edad <= 35: categoria = "Joven"
    si edad >= 36 y edad <= 64: categoria = "Adulto"
    si edad >= 65: categoria = "Adulto mayor"
    
    mostrar edad + " → " + categoria
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"3 → Infante"
"15 → Adolescente"
"70 → Adulto mayor"
*/

function nPersonasEdades(edades) {
    debugger;
    let i = 0;
    
    while (i < edades.length) {
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
        i++;
    }
}

// Pruebas
console.log("=== N personas con clasificación de edades ===");
nPersonasEdades([3, 15, 70]);
nPersonasEdades([5, 25, 45, 80]);