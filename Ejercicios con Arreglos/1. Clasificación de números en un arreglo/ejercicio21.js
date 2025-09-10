// Ejercicio 21: Clasificación de números en un arreglo

/*
ENTRADA:
numeros(leer) = [4, -2, 0, 7, -9]

PROCESO:
para i desde 0 hasta numeros.length
    si numeros[i] > 0: resultado = "positivo"
    sino si numeros[i] < 0: resultado = "negativo"
    sino: resultado = "neutro"
    mostrar numeros[i] + " es " + resultado

SALIDA:
El resultado de este ejercicio es:
"4 es positivo"
"-2 es negativo"
"0 es neutro"
"7 es positivo"
"-9 es negativo"
*/

function clasificarNumerosArreglo(numeros) {
    debugger;
    
    for (let i = 0; i < numeros.length; i++) {
        let resultado;
        
        if (numeros[i] > 0) {
            resultado = "positivo";
        } else if (numeros[i] < 0) {
            resultado = "negativo";
        } else {
            resultado = "neutro";
        }
        
        console.log(`${numeros[i]} es ${resultado}`);
    }
}

// Pruebas
console.log("=== Clasificación de números en un arreglo ===");
clasificarNumerosArreglo([4, -2, 0, 7, -9]);
clasificarNumerosArreglo([10, -5, 3, 0]);