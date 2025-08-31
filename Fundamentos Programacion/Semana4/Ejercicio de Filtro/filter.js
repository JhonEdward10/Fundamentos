
function filterAcademloUsers(users) {
    const filteredUsers = [];
    for(let i = 0; i < users.length; i++) {
        if(users[i].email.endsWith('@academlo.com')) {
            filteredUsers.push(users[i]);
        }
    }
    return filteredUsers;
}




//Callback es una funcion que se pasa como argumento a otra funcion

function x(fn){

}

function y(){
    console.log('Hola');
}

y();


//como se aplica un callback a un filter 


//devuelve al primer usuario que cumple una condicion, esta condicion es provista mediante un callback

function find(array, fn){
    for(let i = 0; i < array.length; i++){  
        const result = fn();
        if(result){
            return array[i];
        }
    }
}

export {find}