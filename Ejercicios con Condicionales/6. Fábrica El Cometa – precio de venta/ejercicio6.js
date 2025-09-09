// Ejercicio 6: Fábrica El Cometa - precio de venta
/*
ENTRADA:
clave(leer) = 3, 1
materiaPrima(leer) = 1000, 2000

PROCESO:
manoObra = materiaPrima * 0.75
gastosFabricacion = materiaPrima * 0.35
costoProduccion = materiaPrima + manoObra + gastosFabricacion
precioVenta = costoProduccion * 1.45

SALIDA:
El resultado de este ejercicio es:
"Precio de venta: $3045.00"
"Precio de venta: $6090.00"
*/
function precioVentaFabrica(clave, materiaPrima) {
    debugger;
    let manoObra = materiaPrima * 0.75;
    let gastosFabricacion = materiaPrima * 0.35;
    let costoProduccion = materiaPrima + manoObra + gastosFabricacion;
    let precioVenta = costoProduccion * 1.45;
    
    return `Precio de venta: $${precioVenta.toFixed(2)}`;
}

// Pruebas
console.log(precioVentaFabrica(3, 1000));
console.log(precioVentaFabrica(1, 2000));