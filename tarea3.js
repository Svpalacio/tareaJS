class Generar_carrito{
    montoTotal=0;
    productos=[];
    constructor(montoTotal,productos){
        this.montoTotal = montoTotal;
        this.productos = productos;
    }
    agregarProducto(nombre,precio){
        if (carrito.productos.indexOf(nombre)>=0){
            console.log("Ya existe el producto "+nombre+" en el carrito");
        } else{
            montoAcumulado=montoAcumulado + precio;
            console.log("* Producto agregado al carrito: "+nombre+" - Precio $ "+precio+" - Monto acumulado: $ "+ montoAcumulado);
            this.montoTotal=montoAcumulado;
            carrito.productos.push(nombre);
        }
    }
}

let carrito = new Generar_carrito(10,["Leche"]);
let montoAcumulado = carrito.montoTotal;

console.log("El monto Total inicial es de: $ "+carrito.montoTotal+" con el producto: "+carrito.productos);
carrito.agregarProducto("azúcar",1000);
carrito.agregarProducto("Yerba",500);
carrito.agregarProducto("Harina",400);
carrito.agregarProducto("Leche",400);

console.log("El monto total es de: " + carrito.montoTotal)
console.log("y los productos son: "+ carrito.productos);


//3) 3.1) Dado el siguiente objeto
//let carrito = {
//    montoTotal: 10,
//    productos: ["Leche"]
//}
//Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

//3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
//agregarProducto(nombre, precio, unidades) {
    // Completar aca...
//}
//Ej:
//agregarProducto("Azucar", 5, 2);

//Resultado esperado
//carrito = {
//    montoTotal: 20,
//    productos: ["Leche", "Azucar"]
//}
//3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe 
//“ya existe xxx"
//NO VA : con yyy unidades”
