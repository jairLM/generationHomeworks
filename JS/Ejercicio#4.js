//Encontrar valores iguales en 2 array
console.clear();

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography','Programming' ,'Spanish', 'English' ];       //Declaración y asignación de las array que se van a comparar

function findSameCourse(student1Courses) {       //Creación de función pasandole como parametro el array student1Courses


    for(let i = 0; i < student1Courses.length && i < student2Courses.length; i++){  //recorrido del arrar
        let = sameCourse = "";     //string vacio para guardar el valor final
        let = position2 = student2Courses[i];    //poscion de los indices que se compararán
        let = position1 = student1Courses[i];

        if(student1Courses.indexOf(position2) >= 0){     //Condicional con los parametros que se van a comprars

            console.log(`La materia que se repite es: ${student1Courses[student1Courses.indexOf(position2)]}`) //mensaje en consola


        } else if (student2Courses.indexOf(position1) >= 0){ //Condicional con los parametros que se van a comprar

            console.log(`La materia que se repite es: ${student1Courses[student2Courses.indexOf(position1)]}`); //mensaje en consola

        }

    }
}

findSameCourse(student1Courses); //invocación
