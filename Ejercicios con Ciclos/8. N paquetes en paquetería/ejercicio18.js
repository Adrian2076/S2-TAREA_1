// Ejercicio 18: N paquetes en paquetería

/*
ENTRADA:
n(leer) = 2
paquetes(leer) = [[4, "Europa"], [6, "Asia"]]

PROCESO:
i = 0
mientras i < n
    peso = paquetes[i][0]
    zona = paquetes[i][1]
    
    si peso > 5: mostrar "Paquete " + (i+1) + ": Error, excede 5 kg"
    sino:
        si zona = "America": tarifaPorKg = 50
        si zona = "Europa": tarifaPorKg = 60
        si zona = "Asia": tarifaPorKg = 70
        costoTotal = peso * tarifaPorKg
        mostrar "Paquete " + (i+1) + ": Costo envío $" + costoTotal
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"Paquete 1: Costo envío $240.00"
"Paquete 2: Error, excede 5 kg"
*/

function nPaquetesPaqueteria(paquetes) {
    debugger;
    let i = 0;
    
    while (i < paquetes.length) {
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
        
        i++;
    }
}

// Pruebas
console.log("=== N paquetes en paquetería ===");
nPaquetesPaqueteria([[4, "Europa"], [6, "Asia"]]);
nPaquetesPaqueteria([[3, "America"], [2, "Asia"], [5, "Europa"]]);