// Ejercicio 1: Número positivo o negativo
/*
ENTRADA:
numero(leer) = -5, 10, 0

PROCESO:
si numero > 0
    resultado = "El número [numero] es positivo"
sino si numero < 0
    resultado = "El número [numero] es negativo"
sino
    resultado = "El número [numero] es neutro"

SALIDA:
El resultado de este ejercicio es:
"El número -5 es negativo."
"El número 10 es positivo."
"El número 0 es neutro."
*/
function numeroPositivoNegativo(numero) {
    debugger;
    if (numero > 0) {
        return `El número ${numero} es positivo.`;
    } else if (numero < 0) {
        return `El número ${numero} es negativo.`;
    } else {
        return `El número ${numero} es neutro.`;
    }
}

// Pruebas
console.log(numeroPositivoNegativo(-5));
console.log(numeroPositivoNegativo(10));
console.log(numeroPositivoNegativo(0));