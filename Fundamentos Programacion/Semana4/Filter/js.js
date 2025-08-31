"use strict"

import users from "./data.js";
import 


// Imprimir la misma fila 10 veces
function generateCard(users) {
    // 1. Generar el código html que voy a poner en la página
    // 2. Identificar el contenedor donde pondré mi código
    // 3. Poner mi código
    let html = '';
    for(let i = 0; i < users.length; i++) {
        html += `<tr>
                    <td>${user[i].name}</td>
                    <td>${user[i].email}</td>
                    <td>${user[i].age}</td>
                </tr>`;
    }
    const container = document.getElementById('users-container');
    container.innerHTML += html;
}
    

// const u = filterAcademloUsers(us);
// generateCard(u);



