// "use strict"

// // Imprimir la misma fila 10 veces
// function generateCard() {
//     // 1. Generar el código html que voy a poner en la página
//     // 2. Identificar el contenedor donde pondré mi código
//     // 3. Poner mi código
//     let html = '';
//     for(let i = 0; i < users.length; i++) {
//         html += `<tr>
//                     <td>${user[i].name}</td>
//                     <td>${user[i].name}</td>
//                 </tr>`;
//     }
//     const container = document.getElementById('users-container');
//     container.innerHTML += html;
// }

// const users = [
//     { name: 'Erik', email: 'erik@academlo.com' },
//     { name: 'Georg', email: 'georg@academlo.com' },
//     { name: 'Daniela', email: 'daniel@academlo.com' },
//     { name: 'Andrés', email: 'andres@academlo.com' }
// ]

// generateCard(users);


// Imprimir los datos de un arreglo de coches
// cada coche debe de tener las propiedades:
// brand, model, price, color



"use strict"

function generateCars(cars){
        // 1. Generar el código html que voy a poner en la página
    // 2. Identificar el contenedor donde pondré mi código
    // 3. Poner mi código
    let html = '';
    for(let i = 0; i < cars.length; i++) {
        html += `<tr>
                    <td>${cars[i].brand}</td>
                    <td>${cars[i].model}</td>
                    <td>${cars[i].price}</td>
                    <td>${cars[i].color}</td>
                </tr>`;
    }
    const container = document.getElementById('users-container');
    container.innerHTML += html;
}

const cars = [
    { brand: 'Audi', model: 'Audi R5', price: 25000,  color: 'Red'},
    { brand: 'Bugatti', model: 'Bugatti Divo', price: 35000, color: 'Blue'},
    { brand: 'Lamborghini', model: 'Veneno', price: 40000, color: 'Yellow' },
];

generateCars(cars);