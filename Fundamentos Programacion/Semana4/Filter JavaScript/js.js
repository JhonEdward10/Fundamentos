//Metodo Filter
// El metodo filter crea un nuevo Array
// Todos los elementos que cumplan la condicion implementada por la funcion dada

// const numbers = [2, 10, 22, 5, 4, 90];

// const newArray = numbers.filter((element) => element > 10);

// console.log(newArray);


//Funciones anonimas

// function x() {
//     console.log('Hola');
// }

// const y = function () {
//     return 5;
// }

// const z = () => 7;


// const a = z();
// console.log(a);


//Metodos para funciones

//ForEach

// const ages = [1,2,3,4,23,231,43];

// function x(number){
//     console.log(number);
// }

//ForEach ejecuta un callback para cada uno de los elementos
// ages.forEach(number => console.log(number));
// ages.forEach((number, index) => console.log(number, index));
// let sum = 0;
// ages.forEach((number) => sum += number)
// console.log(sum);


// let sum = 0;

// function x(number){
//     sum += number;
// }

// console.log(sum);


// function forEach(array, fn){
//     for(let i = 0; i < array.length; i++){
//         fn(ages[i], i);
//     }

// }

// forEach(ages);


//Filter

//Ejecuta un callback por cada uno de los elementos
// const ages = [1,2,3,4,23,231,43];

// const element = ages.filter((number) => number > 2);
// console.log(element);


// const ages = [1, 2, 45, 3, 4];

// // The filter() method creates a new array filled with elements that pass a test provided by a function.
// const elements = ages.filter((number) => number > 2);
// console.log(elements);

//Find

// //El metodo find retorna el  valor del primer elemnto que pasa el test o arreglo
// const ages = [1, 2, 45, 3, 4];

// const n =ages.find((number) => number > 3);
// console.log(n);

// const ages = [1, 2, 3, 4, 45];

// // The find() method returns the value of the first element that passes a test.

// const n = ages.find((number) => number > 3);
// console.log(n);


//Map

//Crea un nuevo arreglo luego de llamar a la funcion por cada uno de los elementos
//Los usos mas comunes  de map es para extraccion de datos


// const users = [
//     {name: "Erik", email: "erik@academlo.com"},
//     {name: "George", email: "george@academlo.com"}
// ];

// const emails = users.map((user) => user.email);
// console.log(emails);

//Reduce

const ages = [1, 2, 3, 4];

// The reduce() method executes a reducer function for array element.
const value = ages.reduce((total, currentValue) => total += currentValue);
console.log(value);






