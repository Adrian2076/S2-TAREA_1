// Ejercicio 8: Paquetería internacional - costo de envío

/*
ENTRADA:
peso(leer) = 4, 6, 3
zona(leer) = "Europa", "Asia", "America"

PROCESO:
si peso > 5: retornar "Error: El peso excede 5 kg"

si zona = "America": tarifaPorKg = 50
si zona = "Europa": tarifaPorKg = 60
si zona = "Asia": tarifaPorKg = 70

costoTotal = peso * tarifaPorKg

SALIDA:
El resultado de este ejercicio es:
"Costo envío: $240.00"
"Error: El peso excede 5 kg"
"Costo envío: $150.00"
*/
function costoEnvioInternacional(peso, zona) {
    debugger;
    if (peso > 5) {
        return "Error: El peso excede 5 kg";
    }
    
    let tarifaPorKg;
    
    if (zona == "America") {
        tarifaPorKg = 50;
    } else if (zona == "Europa") {
        tarifaPorKg = 60;
    } else if (zona == "Asia") {
        tarifaPorKg = 70;
    }
    
    let costoTotal = peso * tarifaPorKg;
    
    return `Costo envío: $${costoTotal.toFixed(2)}`;
}

// Pruebas
console.log(costoEnvioInternacional(4, "Europa"));
console.log(costoEnvioInternacional(6, "Asia"));
console.log(costoEnvioInternacional(3, "America"));