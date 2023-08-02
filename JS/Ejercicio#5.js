console.clear();

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

function print(people) {
    console.table(people);

}


function remove(name) {
    for(let i = 0; i < people.length; i++){
        let position;
        let removed;
        if(people[i] == name){
            position = people.indexOf(name);
            people.splice(position, 1);

        }
    }
}


function move(name) {
    for(let i = 0; i < people.length; i++){

        if(people[i] == name){
            remove(name);
            people.unshift(name);
        }
    }
}


function printYourName(name){
    for(let i = 0; i < people.length; i++){

        if(people[i] == name){
            remove(name);

        }else{
            people.push(name);
        }
    }
}


function stop(people) {
    for(let i = 0; i < people.length; i++){

        console.log(people[i]);

        if(people[i] == "Maria"){
            break;
        }
    }
}


function located(name){
    for(let i = 0; i < people.length; i++){

        if(people[i] == name){

            console.log(`${name} se localiza en la posición: ${people.indexOf(name)}`);

        }
    }
}


print(people);
remove("Dani");
print(people);
remove("Juan");
print(people);
move("Luis");
print(people);
printYourName("Jair");
stop(people);
print(people);
located("Maria");



