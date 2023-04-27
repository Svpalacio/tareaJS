//const array1 = ['rojo','azul','amarillo'];
//const array2 = ['blanco','negro','rojo'];
const array1 = [4, 3, true, 'manzana'];
const array2 = ['pera', 3, false, true, 3, true];
const array_coincidencias = [];

coincidencia(array1,array2,array_coincidencias);
console.log("El primer array contiene los siguientes elementos: "+ array1);
console.log("El segundo array contiene los siguientes elementos: "+ array2);
console.log("Los elementos que coinciden entre ellos son: " + array_coincidencias);

function coincidencia(array1,array2,array_coincidencias) {
    array_coincidencias.splice(0,array_coincidencias.length); //me aseguro de borrarle los datos al "array_coincidencias" antes de usarlo
    for (i = 0; i <= array1.length; i++) {
        if (array2.includes(array1[i])){
           array_coincidencias.push(array1[i]);
        } 
    }
    return array_coincidencias;
}


//2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

//Ejemplo:
//Array1: ['rojo', 'azul', 'amarillo']
//Array2: ['blanco', 'negro', 'rojo']
//Resultado: ['rojo']

//Ejemplo 2:
//Array1: [4, 3, true, 'manzana']
//Array2: ['pera', 3, f alse, true, 3, true]
//Resultado: [3, true]