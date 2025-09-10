// Ejercicio 16: N artículos de la Fábrica El Cometa

/*
ENTRADA:
n(leer) = 2
articulos(leer) = [[3, 1000], [1, 2000]]

PROCESO:
i = 0
mientras i < n
    clave = articulos[i][0]
    materiaPrima = articulos[i][1]
    
    manoObra = materiaPrima * 0.75
    gastosFabricacion = materiaPrima * 0.35
    costoProduccion = materiaPrima + manoObra + gastosFabricacion
    precioVenta = costoProduccion * 1.45
    
    mostrar "Artículo " + (i+1) + ": PV = $" + precioVenta
    i = i + 1

SALIDA:
El resultado de este ejercicio es:
"Artículo 1: PV = $3045.00"
"Artículo 2: PV = $6090.00"
*/

function nArticulosFabrica(articulos) {
    debugger;
    let i = 0;
    
    while (i < articulos.length) {
        let clave = articulos[i][0];
        let materiaPrima = articulos[i][1];
        
        let manoObra = materiaPrima * 0.75;
        let gastosFabricacion = materiaPrima * 0.35;
        let costoProduccion = materiaPrima + manoObra + gastosFabricacion;
        let precioVenta = costoProduccion * 1.45;
        
        console.log(`Artículo ${i + 1}: PV = $${precioVenta.toFixed(2)}`);
        i++;
    }
}

// Pruebas
console.log("=== N artículos de la Fábrica El Cometa ===");
nArticulosFabrica([[3, 1000], [1, 2000]]);
nArticulosFabrica([[2, 1500], [4, 800], [5, 1200]]);