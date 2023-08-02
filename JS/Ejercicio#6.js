console.clear();

let numeros = [3, 6, 12, 5, 100, 1];

function algoritmoBurbuja(numeros) {
    for(let i = 0; i < numeros.length; i++){
        for(let a = 0; a < numeros.length - i - 1; a++){
            if(numeros[a] > numeros[a + 1]){
                let temp = numeros[a];
                numeros[a] = numeros[a + 1];
                numeros[a + 1] = temp;
            }
        }
    }console.log(numeros);
}
algoritmoBurbuja(numeros);
