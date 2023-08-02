//sumatoria de los valores de un array y multiplicacion de los mismos
console.clear();

let numeros = [1, 2, 3, 4];     //Declaración y asignación del array

function sumarAndMultiplicar(numeros) {  //Creación de función pasandole como parametro el array numeros
    let sumaDeNumeros = 0;               //Variable donde se acumulara la sumatoria
    let multiplicarNumeros = 1;          //Variable donde se acumulara la multiplicación

    for(let i = 0; i < numeros.length; i++){   // se recorre el array
        sumaDeNumeros += numeros[i];
        multiplicarNumeros *= numeros[i];     //se suman y se reasignan los valores
     }


   console.log(`La suma de los numeros es igual a: ${ sumaDeNumeros} y la multiplicación de los mismos es igual a: ${multiplicarNumeros}`);  //mensaje que se imprime
}

sumarAndMultiplicar(numeros);  //invocación
