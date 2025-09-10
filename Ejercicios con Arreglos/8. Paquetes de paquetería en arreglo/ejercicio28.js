// Ejercicio 28: Paquetes de paquetería en arreglo

/*
ENTRADA:
paquetes(leer) = [[4, "Europa"], [6, "Asia"]]

PROCESO:
para i desde 0 hasta paquetes.length
    peso = paquetes[i][0]
    zona = paquetes[i][1]
    
    si peso > 5: mostrar "Paquete " + (i+1) + ": Error, excede 5 kg"
    sino:
        si zona = "America": tarifaPorKg = 50
        si zona = "Europa": tarifaPorKg = 60
        si zona = "Asia": tarifaPorKg = 70
        costoTotal = peso * tarifaPorKg
        mostrar "Paquete " + (i+1) + ": Costo envío $" + costoTotal

SALIDA:
El resultado de este ejercicio es:
"Paquete 1: Costo envío $240.00"
"Paquete 2: Error, excede 5 kg"
*/

function paquetesPaqueteriaArreglo(paquetes) {
    debugger;
    
    for (let i = 0; i < paquetes.length; i++) {
        let peso = paquetes[i][0];
        let zona = paquetes[i][1];
        
        if (peso > 5) {
            console.log(`Paquete ${i + 1}: Error, excede 5 kg`);
        } else {
            let tarifaPorKg;
            
            if (zona == "America") {
                tarifaPorKg = 50;
            } else if (zona == "Europa") {
                tarifaPorKg = 60;
            } else if (zona == "Asia") {
                tarifaPorKg = 70;
            }
            
            let costoTotal = peso * tarifaPorKg;
            console.log(`Paquete ${i + 1}: Costo envío $${costoTotal.toFixed(2)}`);
        }
    }
}

// Pruebas
console.log("=== Paquetes de paquetería en arreglo ===");
paquetesPaqueteriaArreglo([[4, "Europa"], [6, "Asia"]]);
paquetesPaqueteriaArreglo([[3, "America"], [2, "Asia"], [5, "Europa"]]);