const users = [];

import { find } from './filter.js'

function generateCard(users){

    let html = '';
    for(let i = 0; i < users.length; i++){

        html += `<tr>
                    <td>${users[i].id}</td>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].age}</td>
                    <td>
                        <button onclick="deleteUser(${users[i].id})">Eliminar</button>
                    </td>
                </tr>`;
    }
    const container = document.getElementById('users-container');
    container.innerHTML = html;
}

function createUser(){
    const input = document.getElementById('name');
    const id = users.length + 1; 
    const user = {
        id: id,
        name: input.value,
        email: '',
        age: '',
    };

    users.push(user);
    generateCard(users);
}



function deleteUser(id){

    function cb(user){
        return user.id === id;
    }
    const user = find(users, cb);
    const index = user.id -1;
    users.splice(index, 1);
    generateCard(users)
}


window.createUser = createUser;
window.deleteUser = deleteUser;


//Encontrar el bug al elminar usuarios
//Permitir que se actualice la informacion de un usuario

