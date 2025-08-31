// imprimir los numeros del 1 al 100
//imprimir 'Hola' 100 veces
// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }

//______________________________________________________________________________________________________

// for(let i = 1; i <= 100; i+=2){
// console.log(i);
// }

//_________________________________________________________________________________________________________

//Imprimir todos los numeros pares <= a 400;
// for(let i = 2; i < 400; i+=2){
//     console.log(i);
// }

//____________________________________________________________________________________________________

//como saber cuantos arreglos

// const age = [20, 70, 80, 432, 32, 214, 231];
// // console.log(age.length);

// for(let i = 0; i<= age.length -1 ; i++){
//     // console.log(i);
//     console.log(age[i]*2);
// }

// //// crear nuevo arreglo con las edades multiplicadas por dos
// const ages2 = [2, 4, 6];

// for(let i = 0; i<= ages2.length -1; i++) {
//     // console.log();
//     // ages2.push(ages2[i] * 2);
//     console.log(ages2);
// }


// //______________________________________________________________-________________________________________________


function getEmails(users){

let emails = [];

for(let i = 0; i < users.length; i++){
emails.push(users[i].email);

}
return emails;
}

const x = getEmails(
[
{ name: "Erik", email: "erik@academlo.com", age: 20 },
{ name: "Georg", email: "georg@academlo.com", age: 30 },
{ name: "Daniel", email: "daniel@academlo.com", age: 40 }]
);

console.log(x);


console.log(users[0].email);
//___________________________________________________________________________________________________________________

// NOTA -> Recuerde que en los loops la consola va dentro del arreglo y la condicion for.
// el return no puede ir en un arreglo por si solo; el return va en una funcion siempre.





