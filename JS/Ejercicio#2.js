//Valores del array *2
console.clear();

let numeros = [1 , 2 , 4, 5];   //Declaración y asignación del array

function multPor2(numeros) {   //Creación de función pasandole como parametro el array numeros
    let numerosPor2 = [];     //Array vacio

    for(let i=0; i <= numeros.length-1; i++){ //recorrer el array
       numerosPor2.push(numeros[i]*2)  //se multiplica cada valor por 2
    }
    return numerosPor2  //retorno
}

console.log(multPor2(numeros)); //impresion e invocación

