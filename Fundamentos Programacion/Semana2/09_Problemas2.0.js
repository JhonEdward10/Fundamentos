/*crea un arreglo con los numeros del 1 al 400 ->Problema 1*/
// const array = [];

// for(let i = 0; i <= 400; i= i+15){
// array.push(i); //-> es la cantidad de veces que se va a implementar el segundo ejercicio
// }
// console.log(array);

//____________________________________________________________________________________________________________________________

/*Crea una función que reciba como parámetros 2 números,
y retorne un arreglo con todos los valores en el rango de esos 2 números
(incluyéndolos), por ejemplo, si recibe 1 y 4 la función debe de retornar el arreglo 
[1, 2, 3, 4], asumiremos que el segundo parámetro recibido es mayor al primero.*/


// function x(num1, num2){

//  const array = [];
// for (let i = num1; i <= num2; i++) {
//  array.push(i);
//    }
//    return array;
// }

// console.log(x(10,20));


//return = retorna el codigo las veces que sea necesaria

//________________________________________________________________________________________________________________________________

/*  Crea una función que lea un array de N cantidad de números y retorne la suma de todos esos números */

// function sum(array){

// let sumNumbers = 0;
// for(i = 0; i < array.length; i++) {
//     sumNumbers += array[i];  
//     console.log(sumNumbers);
// }
// return sumNumbers;
// }

// sum([2, 20, 22, 37, 97]);
// const x = sum([2, 20, 22, 37, 97]);
// console.log(x);

// console.log(sum([2, 20]));

/////==============================================================================================================

//Evaluacion 2

// function sumTwoArrays(array, array2) {
    
//     let sum = 0;
//     let sumNumbers = 0;
//     let sumNumbers2 = 0;

//     for(let i = 0; i < array.length;  i++){
//         sumNumbers = sumNumbers + array[i];
//         // console.log(sumNumbers);
//     }
//     for(let j = 0; j < array2.length; j++){
//         sumNumbers2 = sumNumbers2 + array2[j];
//         // console.log(sumNumbers2)  
//     }
//     sum = sumNumbers + sumNumbers2
//     // console.log(sum);
//     return sum;
//   }

//   console.log(sumTwoArrays([20, 100],[30, 10]));

//__________________________________________________________________________________________________________________________________________

/* 4. Crea una función que reciba como parámetro un array de N cantidad de elementos y retorne el elemento que se encuentra en la mitad
    - En caso de que el número de la mitad sea uno solo el programa debe devolverlo, por ejemplo, del arreglo [1, 3, 4] devolvemos el 3
    - En caso de que hayan 2 números en medio devolveremos un array de números, por ejemplo, en el array [1, 3, 4, 5, 5, 3] devolveremos [4, 5]  */

// function getMiddletem(array){
//si la cantidad de elementos es par debo regresar dos elementos
//si la cantidad de elementos es impar debo regresar un elemento
// const totalElement = array.length;

// if (totalElement % 2 === 0){
//     const middle = parseInt(totalElement/2);
//     console.log(array[middle -1], array[middle]);
// }

// else{
//     const middle = parseInt(totalElement/2);
//     console.log(array[middle]);
// }

// }
// getMiddletem([3, 2, 5, 8, 0, 2, 6]);
// getMiddletem([3, 2, 5, 8, 0, 2, 6, 8]);

/////////__________________________________________________________________________________________________
// function getEmails(users){

// let emails = [];

// for(let i = 0; i < users.length; i++){
// emails.push(users[i].email);
// }
// return emails;
// }

// const x = getEmails(
// [
// { name: "Erik", email: "erik@academlo.com", age: 20 },
// { name: "Georg", email: "georg@academlo.com", age: 30 },
// { name: "Daniel", email: "daniel@academlo.com", age: 40 }]
// );

// console.log(x);


// console.log(users[0].email);

//_____________________________________________________________________________________________________________

// function deleteUser(users, email){
    
// for(let i = 0; i < users.length; i++){
//     const correo = users[i].email;
//      if(correo === email){
//        users.splice(i, 1);
//     }
// }
// return users;
// }


// const x = [
// { name: 'Erik', email: 'erik@academlo.com' },
// { name: 'Georg', email: 'georg@academlo.com' }, 
// { name: 'Andrea', email: 'andrea@gmail.com' }] 

// console.log(deleteUser(x, "andrea@gmail.com"));

//___________________________________________________________________________________________________________________________


// function mergeData(users, attendances){

//     const arrayNew = [];

//     for(let i = 0; i < users.length; i++){
//         for(let j = 0; j < attendances.length; j++){
//             if(users[i].email === attendances[j].email){
//                 const mergeObject = {
//                     name: users[i].name,
//                     email: users[i].email,
//                     attendance: attendances[j].attendance
//                 }
//                 arrayNew.push(mergeObject);
//             }
//         }
//     }
//     return arrayNew;
// }

//___________________________________________________________________________________________________________________________

// const students = [
//     { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
//     { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
//     { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
//     { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
//   ];

// const countries = [
//     { id: 1, name: 'Mexico', },
//     { id: 2, name: 'Colombia' }
//   ]


// let countryName = "Colombia";
// //1. Definir que los dos primeros parametros son arreglos y el ultimo es un string
// //2. Hacer una funcion que contenga los arreglos y el string
// //3. Se debe tener encuenta que los arreglos pueden tener n objetos y el string puede ser n cualquiere.


// function countStudent(students, countries, countryName){

//     let newArray = [];

//     for(let i = 0; i < students.length; i++){
//         for(let j=0; j< countries.length; j++){
          
//             if(students[i].country_id === countries[j].id && countries[j].name === countryName){
//               newArray.push(students[i]);
//        }
//       }
//     }
//   return newArray;
// }

// console.log(countStudent(students, countries, "Mexico"));
///______________________________________________________________________________________________________________

// const users = [
//     {
//         name: 'Erik',
//         gender: 'male',
//         age: 22,
//     },
//     {
//         name: 'Daniela',
//         gender: 'female',
//         age: 22,
//     },
//     {
//         name: 'Gustavo',
//         gender: 'male',
//         age: 49,
//     },
//     {
//         name: 'María',
//         gender: 'female',
//         age: 35,
//     },
// ];


// function findUser(users, name){

//     let users1 = [];
//     users1 = users.find(e => e.name === name);
//     return users1;

// }

// console.log(findUser(users, 'Erik'));

//_________________________________________________________________________________________________________________________

// const students = [
//     { name: 'Daniela', age: 25 },
//     { name: 'Andrea', age: 23 },
//     { name: 'José', age: 27 },
//     { name: 'Georg', age: 23 },
//   ];


//     let unicosElementos = [];
//     let vecesRepetidas = [];
//     let contador = 1;

//     for(let i = 0; i < students.length; i++){
//         if(students[i + 1].age === students[i].age){
//             contador ++;
//         }
//         else{
//             unicosElementos.push(students[i]);
//             vecesRepetidas.push(contador);
//             contador = 1;
//         }
    

//     console.log(unicosElementos);
//     console.log(vecesRepetidas);

// }

//__________________________________________________________________________________________________________


// const user = [
//     {property: 'email'},
//     {property: 'casa'}
// ];

// function addProperty(property){


//     // user.property = 'Hola';
//     user[property] ='Hola';
//     console.log(user);
// }

// addProperty('email');
// addProperty('name');
// addProperty('age', 30);

//____________________________________________________________________________________________________________________________________________

// // Contar cuanta cantidad de globos hay y de que color
// //     Si la propiedad existe le voy a sumar 1
//     // if (total[color] > 0){
//     //     total[color]++;
//     // }
//     //si la propiedad no existe le agrego el valor 1
//     // else{
//     //     total[color] = 1;
//     // }

// const total = {};
// for(let i = 0; i < balloons.length; i++){
//     const color = balloons[i].color;
//     if (!total[color] > 0){
//         total[color] =1;
//     }
//     else {
//         total[color]++;
//     }

//     // total[color] ? total[color] ++ : total[color] = 1;
// }
// console.log(total);


// let number = 0;
// let col = null;

// for(let color in total){
//     if(total[color] > number){
//         number = total[color]
//         col = color;
//     }
// }

// console.log(col);

//_____________________________________________________________________________________________________________________-
// const colors = {
//     yellow: 4
// }

// const color = 'yellow';
// console.log(colors[color]);

//_________________________________________________________________________________________________________________________________

// const usersApp = [
//     { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
//     { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
//   ];

// function getApplications(users){

//     const newUsersApp = [];
//     for(let i = 0; i < users.length; i++){
//         if(users[i].application !== null){
//             newUsersApp.push(users[i]);
//         }
//     }
//     return newUsersApp;
// }

// console.log(getApplications([
//     { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
//     { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' }},
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' }}
//   ]));

//_______________________________________________________________________________________________________________________

// function sumEvens(start, end) {

//     // const pairNumbers = [];
//     let sum = 0;
    
//     for(let i = start + 1 ; i < end; i++){
//     if(i % 2 === 0){
//         // pairNumbers.push(i);
//         sum += i;
//     }
// }
// return sum;
// }

// console.log(sumEvens(20,40));

// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

//_________________________________________________________________________________________________________________


// function getNMultiples(number, totalMultiples) {

//     const multiplesNumber = [];

//     for(let i = 2; i < (totalMultiples + 2); i++){
//        multiplesNumber.push(number*[i]);
//     }
//     return multiplesNumber;
// }

// console.log(getNMultiples(20, 2));

// function getNMultiples(number, totalMultiples) {

//     let multiples = 0;
//     let multiplesNumber = [];

//     for(let i = number + 1; i < totalMultiples; i++){

//     }

//     return multiples;
//   }

//   console.log(getNMultiples);



//______________________________________________________________________________________________________________________

// let frase =  "HolaaaaaaA, me gusta la programacion";


// function findMostCommonLetter(text){

//       let letras = {};
//       let phrase = text.toLowerCase();
    
//     for(let i = 0; i < phrase.length; i++){
//         if(phrase[i] !== " "){
//         if(!letras[phrase[i]]){
//             letras[phrase[i]] = 1;
//         }
//         else{
//             letras[phrase[i]]++;
//         }
//      } 
//     }
//     return letras;
    
// //     let veces = 0;
// //     let mostCommonLetter = 0;
    
// //     for(const i in letras){
// //     if(letras[i] > veces){
// //         veces = letras[i];
// //         mostCommonLetter = i;
// //     }
// //     }

// //     return mostCommonLetter;
// }

// console.log(findMostCommonLetter("HolaaaaaaA, me gusta la programacion"));


//=============================================================================================================

// const bolsaDeBolas = [
//     {color: 'red'},
//     {color: 'yellow'},
//     {color: 'blue'},
//     {color: 'yellow'}, 
//     {color: 'red'},
//     {color: 'yellow'},
//     {color: 'yellow'}, 
//     {color: 'red'},
//     {color: 'yellow'},
//     {color: 'yellow'}, 
//     {color: 'red'},
//     {color: 'yellow'}
// ];

// const caja = { };

// for(let i = 0; i < bolsaDeBolas.length; i++){
//     let colorBola = bolsaDeBolas[i].color;
//     if(!caja[colorBola]){
//         caja[colorBola] = 0;
//     }
//     caja[colorBola] +=1;
    
// }
// console.log(caja);


// let guiadeVeces = 0;
// let guiadeColor = '';

// for(color in caja){
//     if(guiadeVeces < caja[color]){
//         guiadeVeces = caja[color];
//         guiadeColor = color;
//     }
// }

// console.log(guiadeColor+ ' ' + '=' + ' ' + guiadeVeces);

//================================================================================================================
// if(str[i] !== ""){}
// && str[i] === ""

//___________________________________________________________________________________________________________________

// let Phrase1 = "Hola, me llamo Erik";

// function countLetter(phrase, letter) {

//     let letter1 = {};

//     for(let i = phrase; i <= letter; i++){
//         if(){

//         }
//     }
//    return total;
//   }
//=======================================================================================================

// Invierte el texto

// La función reverseText() recibe como parámetros un string:

// Tu labor es invertir este string.

// Ejemplo:
// Si tu función recibe "Hola" debes retornar aloH.

// Ejemplo 2:
// Si tu función recibe "Ya es muy tarde" debes retornar edrat yum se aY.

// *Recuerda utilizar return para devolver tu solución.
// *Tu solución debe de funcionar para cualquier string.
// *Tip: Puedes apoyarte en el método reverse de Javascript (que solo funciona para arreglos).

//1. 

// const text1 = "Hola";

// function reverseText(text) {

//     let reversedText = ' ';
  
//     let textArray = Array.from(text);
//     let reversed = textArray.reverse();
//     reversedText.push(reversed.join(" "));

//     return reversedText;
 
    
//   }
  
// console.log(reverseText("hola"));

// function reverseText(text) {

//     if (text === "") {
//         return "";
//     } else {
//         return reverseText(text.substr(1)) + text.charAt(0);
//     }
// }

// console.log(reverseText("hola, como estas"));



//===================================================================================================================


// function countLetter(phrase, letter){

//     let contador = [];

//     for(let i = 0; i < phrase.length; i++){
//         if(phrase[i] === letter){
//             contador.push(i);
//         }
//     }
//     return contador.length;
// }

// console.log(countLetter('Hola me llaaaaaaaaaamo erik', 'a'));

//=============================================================================================================================

// const usersApp = [
//     { name: 'Andrea', email: 'andrea@gmail.com', channel: 'youtube', application: null },
//     { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Alondra', email: 'alondra@gmail.com', channel: 'twitter', application: { country: 'Colombia', state: 'Bogotá' } },
//     { name: 'Luis', email: 'luisa@gmail.com', channel: 'twitter', application: { country: 'México', state: 'Nuevo León' } }
//     ] ;

//     function countApplicationsByChannel(students) {

//         let contador = {};


//         for(let i = 0; i < students.length; i++){
//             let app = students[i].channel;
//             if(students[i].application !== null){
//                 if(contador[app]){
//                     contador[app]++;   
//                 }
//                 else{
//                     contador[app] = 1;
//                 }
//             }
//         }
//         return contador;
//       }
      
// console.log(countApplicationsByChannel(usersApp));

//__________________________________________________________________________________________________________________________

// function multiplesOf3and5(number){
    
//     let sum = 0;

//     for(let i = 0; i < number; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sum = sum + i;
//        }
//     }
//     return sum;
// }

// console.log(multiplesOf3and5(10));


// let multiplesOf3and5 = (number) => {
    
//     let sum = 0;

//     for(let i = 0; i < number; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//             sum = sum + i;
//        }
//     }
//     return sum;
// }

// console.log(multiplesOf3and5(10));

//__________________________________________________________________________________________________________________


// const fibonacci = (limit) => {

//     const array = [0,1];
//     let number = 1;
//     let sum = array[number] + array[number - 1];

//     for(let i = 1; sum < limit; i++){
//         sum = array[i] + array[i - 1];
//         array.push(sum)
//     }

//     return array;
//   }

//   console.log(fibonacci(10));

//___________________________________________________________________________________________________


// function countNumbers(number) {
//     let total = 0;
//     while(number >= 1){
//         total = total + 1;
//         number = number / 10;

//     }

//     return total;
//   }

//   console.log(countNumbers(1233));

//______________________________________________________________________________

// function countNumbers(number) {
//     let total = 0;

//     for(let i = number; number >= 1; i++){
//         total = number + 1;
//     }

//     return total;
//   }

//   console.log(countNumbers(1233));

//________________________________________________________________________

// function countWords(text) {

//     let counter = { };
//     let textRepeat = text.split(' ');

//     for(let i = 0; i < textRepeat.length; i++){
//         if(!counter[textRepeat[i]]){
//             counter[textRepeat[i]] = 0;
//         }
//         counter [textRepeat[i]] += 1;
//     }
  
//     return counter;
// }

// console.log(countWords('Hola me llamo edward y me llamo'));

//____________________________________________________
   
// function getPendingInvoices(charges) {
//     let counter = [];

//     for(let i = 0; i < charges.length; i++){
//         let id = charges[i].invoice_id;
//         if(charges[i].status !== "success"){
//             if(counter[id]){
//                 counter[id]++
//             }
//             counter[id] = 1;
//             counter.push(charges[i].invoice_id);
//         }
//     }
//     return counter;
//   }

// console.log(getPendingInvoices([{"amount": "50USD", "invoice_id": 1, "status": "failed"}, {"amount": "50USD", "invoice_id": 3, "status": "failed"}, {"amount": "75USD", "invoice_id": 3, "status": "failed"}]));

//___________________________________________________________________________________

// const arraySimbols = symbol_string.split('');

// let closeSymbolExpected = 0;

// let closeSymbolCount = 0; 

// for(symbol of arraySimbols){
//     if(symbol === ')'){
//         closeSymbolExpected ++
//     }
//     else{
//         closeSymbolCount ++
//     }
// }

// if(arraySimbols[0] === ')'){
//     return false
// }

// return closeSymbolExpected === closeSymbolCount;

//______________________________________________________________________________

//Hacker Rank Day 0

    // This line of code prints the first line of output
    // console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    // console.log("Welcome to 30 Days of Code!");

    // console.log("");

//_______________________________________________________________________________

//Hacker Rank Day 1

// var i = 4
// var d = 4.0
// var s = "HackerRank "
// Declare second integer, double, and String variables.
    
// let n = Number(input_stdin_array[0]);
// let e = Number(input_stdin_array[1]);
// let p = input_stdin_array[2];
    
// Read and save an integer, double, and String to your variables.

// Print the sum of both integer variables on a new line.
// console.log(n+i);

// Print the sum of the double variables on a new line.
// console.log((e+d).toFixed(1));
    
// Concatenate and print the String variables on a new line
// console.log(s+p);


//________________________________________________________________________________

//Hacker rank Day 2

// function solve(meal_cost, tip_percent, tax_percent) {
//     Write your code here
//     let tip = (meal_cost * tip_percent)/100;
    
//     let tax = (tax_percent * meal_cost)/100;
    
//     let total_cost = meal_cost + tip + tax;

//     let x = Math.round(total_cost);
    
//     return x;
// };

// console.log(solve(30.00, 15, 10));

//_________________________________________________________________________________

//Hacker Rank Day 3

// function getNumber(N){
//     if(N % 2 === 0){
//         if(N > 2 && N <= 5 || N > 20){
//             console.log("Not Weird");  
//         }
//     }
//     if(N % 2 === 0){
//         if(N >= 6 && N <= 20){
//             console.log("Weird");  
//         }
//     }
//     else{
//         console.log("Weird");  
//     }
// };

// console.log(getNumber(4));

//_______________________________________________________________________________________________________

//Hacker Rank Day 4

// function Person(initialAge){
//     // Add some more code to run some checks on initialAge
//     if(initialAge < 0){
//         initialAge = 0;
//         console.log("Age is not valid, setting age to 0.");
//     }
//   this.amIOld=function(){
//    // Do some computations in here and print out the correct statement to the console
//    if(initialAge < 13){
//        console.log("You are young");
//    }
//    else if(initialAge >= 13 && initialAge < 18){
//        console.log("You are a teenager.");
//    }
//    else{
//        console.log("You are old");
//    }

//   };
//    this.yearPasses=function(){
//           // Increment the age of the person in here
//           return initialAge++;
//    };
// }

//_______________________________________________________________________________________________

//Hacker Rank Day 5

// function multiplesNumber(n){
//     for(let i = 1; i <= 10; i++){
//         let result = i*n;
//         console.log(`${i} x ${n} = ${result}`);
//     }
// }

// multiplesNumber(3);

// function multiplesNumber(n){
//     while(1 <= n <= 10){
//         let result = i*n;
//         console.log(result);
//     }
// }

// multiplesNumber(3);

//_______________________________________________________________________________________________

//Hacker Rank Day 6 

// function processData(input) {
//     const result = [];
//     input.split('\n').forEach((word, i) => {
//         if (i>0) {
//             let evenLetter = word.split('').filter((l, i) => i%2 === 0)
//             let oddLetter = word.split('').filter((l, i) => i%2 !== 0)
//             result.push(`${evenLetter.join('')} ${oddLetter.join('')}`)
//     }
//     })
//     return result.join('\n')
// }

// console.log(processData('jhonedwardmendez'));

//_______________________________________________________________________________________________

//Hacker Rank Day 7

// function invertedNumbers(arr){
//   let result = arr.reverse().join(' ');
//     console.log(result);
// }

// invertedNumbers(([555, 666, 444, 777, 333, 888, 222, 999, 111]));

//________________________________________________________________________________________________

//Hacker Rank Day 8

// function processData(input) {
//     //Enter your code here
//     const array = input.split('\n');

//     const arrayContacts = array.slice(1, (+array[0] + 1));
//     const arrayNames = array.slice((+array[0] + 1));

//     const contacts = {};

//     arrayContacts.map(contact => {
//         const [name, phone] = contact.split(' ')
//         contacts[name] = [phone]
//     });

//     arrayNames.map(name => {
//         if(contacts[name]){
//             console.log(`${name}=${contacts[name]}`);
//         } else {
//             console.log('Not found');
//         }
//     });  
// } 

// processData();

// var x = 3;
// var i = 0;
// while (i < 3) {
//     x += 1;
//     i += 1;
// }
// console.log(x);

//___________________________________________________________________________________________________________

// Función que haga reverse de un subconjunto de una lista y después retorne la lista
// el método recibe:
// 1. La lista
// 2. El índice del inicio del subconjunto
// 2. El índice del fin del subconjunto
// function reverseSublist(list, start, end) {
//     let newArray = [];
//     let array = list.slice(start, end +1);

//     let reverseSublst = array.reverse();

//     let startList = list.slice(0, start);
//     let endList = list.slice(end +1);

//     return [...startList, ...reverseSublst,...endList]
    
// }


// console.log(reverseSublist(
//     list=["js", "python", "css", "html", "nodejs", "c++", "Java", "kotlin"],
//     start=0,
//     end=3
// ));


// Función que encuentre el índice del número más pequeño en un subconjunto de una lista
// el método recibe:
// 1. La lista
// 2. El índice del inicio del subconjunto
// Nota, el subconjunto es desde el índice de inicio hasta el final de la lista

// function findMin(list, start) {
    
// }


//________________________________________________________________________________

// let x = ["1", "2", "15", "-7", "300"];

// let y = x.sort();

// console.log(y);

//________________________________________________________________________________________________________________

// function factorial(number){
//     let total = 1;
//     let i = 1;
//     while(i <= number){
//         total = total * i;
//         i++;
//     }
//     return total;
// };

// console.log(factorial(170));

//_______________________________________________________________________________________

// let swap = function(array, firstIndex, secondIndex) {
//     let temp = array[firstIndex];
//     array[firstIndex] = array[secondIndex];
//     array[secondIndex] = temp;
// };

// let indexOfMinimum = function(array, startIndex) {

//     let minValue = array[startIndex];
//     let minIndex = startIndex;

//     for(let i = minIndex + 1; i < array.length; i++) {
//         if(array[i] < minValue) {
//             minIndex = i;
//             minValue = array[i];
//         }
//     } 
//     return minIndex;
// }; 

// let selectionSort = function(array) {
//     let exchanged;
//     for(let i = 0; i<array.length; i++){
//         exchanged = indexOfMinimum(array, i);
//         console.log(swap(array, i, exchanged));
//     }
// };

// let array = [22, 11, 99, 88, 9, 7, 42];
// selectionSort(array);
// console.log(array);

// let array1 = [38, 10, 55, 76, 30, 62, 22];
// selectionSort(array1);

// console.log(array);

//__________________________________________________________________________________________________________________________

// let reverse = function(list, start, end){
//     const startList = list.slice(0, start);
//     const endList = list.slice(end + 1);

//     const subList = list.slice(start, end+1);
//     const reverseSubList = subList.reverse();
//     return [...startList, ...reverseSubList, ...endList];
// };

// let indexOfMinimum = function(list, startIndex){
//     let minValue = list[startIndex];
//     let minIndex = startIndex;

//     for(let i = minIndex + 1; i < list.length; i++){
//         if(list[i] < minValue){
//             minIndex = i;
//             minValue = list[i];
//         } 
//     }
//     return minIndex;
// };

// let selectionSort = function(list){
//     let j;
//     for(let i = 0; i<list.length; i++){
//         j = indexOfMinimum(list, i);
//         console.log(reverse(list, i, j)); 
//     }
// };

// let list = [4, 2, 1, 3];
// selectionSort(list);

//____________________________________________________________________________________________________________________________________________

// function getGrade(score) {
//     let grade;
//     // Write your code here
//     if(score < 5){
//         grade= "F";
//     }
//     else if(score< 10){
//         grade = "E";
//     }
//     else if(score< 15){
//         grade = "D";
//     }
//     else if(score< 20){
//         grade = "C";
//     }
//     else if(score< 25){
//         grade = "B";
//     }
//     else{
//         grade = "A";
//     }
    
//     return grade;
// }

// console.log(getGrade(20));

//____________________________________________________________________________________________________________

// function getLetter(s) {
//     let letter;
//     // Write your code here
//     for(let i = 0; i < s.length; i++){
//         if(s.charAt(0) === "a"){
//             letter = "A";
//         }
//         else if(s.charAt(0) === "b"){
//             letter = "B";
//         }
//         else if(s.charAt(0) === "h"){
//             letter = "C";
//         }
//         else{
//             letter = "D" 
//         }
//     }
    
//     return letter;
// }

// console.log(getLetter("ewxya"));

//____________________________________________________________________________________________________________

// const numeros = [1,2,3,4,5];

// const res = numeros.reduce((acc, item) => {
//  return (acc += item);
// }, []);

// console.log(res, typeof res);
//____________________________________________________________________________________________________________________


// function vowelsAndConsonants(s) {
//   let vowel = ["a", "e", "i", "o", "u"];
//   let consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
//   for(let i = 0; i < s.length; i++){
//     if(vowel.includes(s[i])){
//       console.log(s[i]);
//     }  
//   }
//   for(let j = 0; j < s.length; j++){
//     if(consonants.includes(s[j])){
//       console.log(s[j]);
//     }
//   }
// }

// vowelsAndConsonants("eduarmendezmedina");

//____________________________________________________________________________________________________________________

// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// let day = "Sunday";
// console.log(typeof days);
// console.log(typeof day);

// console.log(days instanceof Array);

// let names  = ["Olivia", "Emma", "Mateo", "Samuel"];
// console.log(names.length);

// names[5] = "Amalia";
// console.log(names.length);

//______________________________________________________________________________________________________________________________

// let ticket = {
//   from: "Pitalito",
//   to: "Neiva",
//   price: 80000
// };

// ticket.name = "Jhon Edward";
// ticket.surname = "Mendez Tovar";

// console.log(`Ticket Name: ${ticket.name}`);
// console.log(`Ticket Surname: ${ticket.surname}`);
// console.log(`Ticket From: ${ticket.from}`);
// console.log(`Ticket To: ${ticket.to}`);
// console.log(`Ticket Valor: ${ticket.price}`);

// let person = {};

// person.name = "Laura Leslie";
// person.surname = "Erazo Ortega";

// console.log(`${ticket.name} ${ticket.surname} y ${person.name} ${person.surname} se Aman <3`);

// let Books = [
//   { 
//     title: "Speaking JavaScript",
//     author: "Axel Rauschmayer",
//     pages: 460
//   },
//   {
//     title: "Programming JavaScript Applications",
//     author: "Eric Elliott",
//     pages: 254
//   },
//   {
//     title: "Understanding ECMAScript",
//     author: "Nicholas C. Zakas",
//     pages: 352
//   }
// ];

// let newBook = {
//   title: "Learning JavaScript Design Patterns",
//   author: "Addy Osmani",
//   pages: 254
// };

// Books.push(newBook);

// let selectArray = Books.slice(-2);

// let newArray = Books.shift();

// console.log(Books[0]);

//___________________________________________________________________________________________________________________

// let nombre = 0x21;

// console.log(nombre);

//___________________________________________________________________________________________________________________________

// let Users = [
//  {
//     name: "Jhon Edward Mendez Tovar",
//     books: "La Pasion de cristo"
//  }
// ];

//________________________________________________________________________________________________________________________

// function hello(){
//     console.log("Hola mundo");
// }

// hello();

//________________________________________________________________________________________________________________________
  
// console.log(!true); // -> false
// console.log(!false); // -> true

// let nr = 0;
// let year = 1970;
// let name = "Alice";
// let empty = "";

// console.log(!!nr); // -> true
// console.log(!year); // -> false
// console.log(!name); // -> false
// console.log(!!empty); // -> true

// console.log("Hola mundo Putos");

// let x = "Alice"+10;
// console.log(x);

// let width = prompt("Volumen de la caja, ingresa el ancho", 0);
// let height = prompt("Volumen de la caja, ingresa la altura", 0);
// let length = prompt("Volumen de la caja, ingresa la longitud", 0);
// let volume = width * height * length;
// alert(`El volumen de la caja es ${volume}`);

// Interaccion con el usuario


// let animals = ["Dog", "Cat", "Hamster"];

// let x 10; // numero 1
// console.log(x);

// const x = 10; //2
// ocnsole.log(x);


// try{
//     ocnsole.log("start");
// }catch{
//     console.log("error");
// }finally{
//     console.log("end");
// }

// try{
//     console.log("start");
// }catch{
//     console.log("error");
// }finally{
//     console.log("end");
// }

// try{
//     console.log("start");
// }catch (error){
//     console.log("error");
// }finally{
//     console.log("end");
// }

//intentar llamar a una funcion inexistente

//se ejecutara exactamente una instruccion

// try{
//     ocnsole.log("start");
// }catch (error){
//     console.log("error");
// }
// console.log("end");

// let a = true && 20;
// let b= 0 || 20;
// let c = 0 && 20;

// console.log(`${a} ${b} ${c}`);

// let means = "plane";
// let msg = `I do not like travelling by ${means}`;
// console.log(msg);

// let msg1 = "hello";
// let msg2 = msg1.slice(-1);

// console.log(msg2 ? msg2 : msg2 + msg1);
// let x = mult(2)(10);
// console.log(x);

