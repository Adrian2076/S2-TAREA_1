// Ejercicio 26: Artículos de la fábrica en arreglo

/*
ENTRADA:
articulos(leer) = [[3, 1000], [1, 2000]]

PROCESO:
para i desde 0 hasta articulos.length
    clave = articulos[i][0]
    materiaPrima = articulos[i][1]
    
    manoObra = materiaPrima * 0.75
    gastosFabricacion = materiaPrima * 0.35
    costoProduccion = materiaPrima + manoObra + gastosFabricacion
    precioVenta = costoProduccion * 1.45
    
    mostrar "Artículo " + (i+1) + ": PV = $" + precioVenta

SALIDA:
El resultado de este ejercicio es:
"Artículo 1: PV = $3045.00"
"Artículo 2: PV = $6090.00"
*/

function articulosFabricaArreglo(articulos) {
    debugger;
    
    for (let i = 0; i < articulos.length; i++) {
        let clave = articulos[i][0];
        let materiaPrima = articulos[i][1];
        
        let manoObra = materiaPrima * 0.75;
        let gastosFabricacion = materiaPrima * 0.35;
        let costoProduccion = materiaPrima + manoObra + gastosFabricacion;
        let precioVenta = costoProduccion * 1.45;
        
        console.log(`Artículo ${i + 1}: PV = $${precioVenta.toFixed(2)}`);
    }
}

// Pruebas
console.log("=== Artículos de la fábrica en arreglo ===");
articulosFabricaArreglo([[3, 1000], [1, 2000]]);
articulosFabricaArreglo([[2, 1500], [4, 800], [5, 1200]]);