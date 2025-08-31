"use strict"

import  users  from "./data.js";
import { filter, find } from "./filters.js";

function generateCard(users){

    let html = '';
    for(let i = 0; i < users.length; i++){

        html += `<tr>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                    <td>${users[i].age}</td>
                </tr>`;
    }
    const container = document.getElementById('users-container');
    container.innerHTML = html;
}

function y(user){
    return user.email.endsWith('@academlo.com');
}

function z(user){
    return user.age >= 20 && user.age <= 40;
}

//Funcion filter
//const filteredsAcademloUsers = filter(users, y);
// const filteredsUsersByAge = filter(users, z);

//Funcion find

// const user = find(users, z);
// console.log(user);

// generateCard([user]);

//Callback 
//Un callback es una funcion que se pasa como argumento a otra funcion

//Que pasa si coloco parentesis, el parentesis ejecuta la funcion x o y o z etc

// function a(user){
//     return user.email.endsWith('@academlo.com') && user.age >= 20 && user.age <= 40;
// }

//const u = filter(users, y);
//const u2 = filter(users, z);

//const u = filterUsersAcademlo(users);
//const u = filterByAge(users);
//console.log(u);

function condition(user){
    const input = document.getElementById('name');
    const userNameLowerCase = user.name.toLowerCase();
    const inputLowerCase = input.value.toLowerCase();
    return userNameLowerCase.includes(inputLowerCase);
}

function filterByName(){
    const filteredUsers = filter(users, condition);
    generateCard(filteredUsers);
}

generateCard(users);

window.filterByName = filterByName;