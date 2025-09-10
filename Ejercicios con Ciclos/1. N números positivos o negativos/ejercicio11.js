// Ejercicio 11: N números positivos o negativos

/*
ENTRADA:
n(leer) = 5
numeros(leer) = [4, -2, 0, 7, -9]

PROCESO:
i = 0
mientras i < n
    si numeros[i] > 0: resultado = "positivo"
    sino si numeros[i] < 0: resultado = "negativo"
    sino: resultado = "neutro"
    mostrar numeros[i] + " es " + resultado
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"4 es positivo"
"-2 es negativo"
"0 es neutro"
"7 es positivo"
"-9 es negativo"
*/

function nNumerosPositivosNegativos(numeros) {
    debugger;
    let i = 0;
    
    while (i < numeros.length) {
        let resultado;
        
        if (numeros[i] > 0) {
            resultado = "positivo";
        } else if (numeros[i] < 0) {
            resultado = "negativo";
        } else {
            resultado = "neutro";
        }
        
        console.log(`${numeros[i]} es ${resultado}`);
        i++;
    }
}

// Pruebas
console.log("=== N números positivos o negativos ===");
nNumerosPositivosNegativos([4, -2, 0, 7, -9]);
nNumerosPositivosNegativos([10, -5, 3]);