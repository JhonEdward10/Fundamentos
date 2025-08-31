//const email = "jhonedwardmendeztovar@gmail.com"; //Buenas practicas al colocar punto y coma
//En programacion empezamos a contar desde el numero 0

//Cuantas letras son? 17
//cual es la posicion de la ultima letra? 16

//const text = "Hola, ¿Como estas?"; //-> aqui se cuenta los caracteres desde 0
//Cuantas letras son? 18
//cual es la posicion de la ultima letra? 17

//const text2 = "Hola, me llamo erik"; //-> aqui se cuenta los caracteres desde 0
//Cuantas letras son? 19
//cual es la posicion de la ultima letra? 18

//El ultimo indice (o la posicion) del ultimo caracter siempre sera = total de caracteres -1
// Indice = total de caracter - 1






//const age = 21;  //Este es tipo number y se cuenta desde 1, cuando es comentario comienza desde 0
//const age2 = 21; //
//const sum = age + age2; //No se va a sumar porque age2 esta como comentario
//console.log(email);
//console.log(sum);

const user = "Soy Erik y tengo 9"; //18
const user2 = "Soy Daniel y tengo 7";//20

const userLength = user.length;
const user2Length = user2.length;

const lastCharacterUser = Number(user[userLength -1]);
const lastCharacterUser2 = Number(user2[user2Length -1]);

// console.log(lastCharacterUser + lastCharacterUser2);

// console.log(user.length);
// console.log(user2.length);

// ____________________________________________________________________________________________________________________

// Encuentra el ultimo caracter de un texto sin importar su longitud de caracteres que tengan.

// Sumemos las edades de las siguientes frases 

// Solucion 1
// const user3 = "Soy Erik y tengo 23"; 
// const user4 = "Soy Daniel y tengo 43";

// const user3Length = Number(user3[user3.length - 1] + user3[user3.length - 2]);
// const user4Length = Number(user4[user4.length - 1] + user4[user4.length - 2]);

// //const lastCharacterUser3 = Number(user3[17]) + (user3[18]);

// //const lastCharacterUser4 = (user4[19]) + (user4[20]);

// //console.log(user3.length);
// //console.log(user4.length);

// // console.log(lastCharacterUser3);
// // console.log(lastCharacterUser4);



// // const sum = Number(lastCharacterUser3) + Number(lastCharacterUser4);

// console.log(user3Length + user4Length);

//___________________________________________________________________________________________________________________

// Solucion 2

// const user3 = "Soy Erik y tengo 23"; 
// const user4 = "Soy Daniel y tengo 43";

//  const user3a = user3.length -2;
//  const user3b = user3.length -1;

// const user4a = user4.length -2;
// const user4b = user4.length -1;

// const edad1 =  user3[user3a] + user3[user3b];
// const edad2 =  user4[user4a] + user4[user4b];

// const suma = Number(edad1) + Number(edad2);

// console.log(suma);











