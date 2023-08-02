
console.clear();
let arr = ["This", "is", "a", "sentence."]; //Declaración y asignacion del array

function printOutStringJoin(arr){ //Se crea funcion para pasarle como parametro el array arr
    let fraseJunta= ""; //se declara un variable con un string vacio
        for(let i = 0; i <= arr.length-1; i++){  //bucle que recorre el array

            fraseJunta = fraseJunta + arr[i]; //concatenacion para cada repetición

        if(i != arr.length-1)  fraseJunta = fraseJunta + " ";  //Condicional para aplicar los espacios vacios

            }

    return fraseJunta;
}

console.log(printOutStringJoin(arr));



//con join()

function printOutString(arr) {
    let fraseJunta;
    fraseJunta = arr.join(" ");
    return fraseJunta;
}

console.log(printOutString(arr))




