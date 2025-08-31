const ages = [0,1,2,3,4,5];
ages.push(22);
console.log(ages); 




//primero hay que tener un arreglo vacio

// const values = [];
// for(let i = 1; i <= 100; i++) {
//     values.push(i);
// }
// console.log(values);

// //push añade elementos al final
// //shift elimina el primer elemento
// //unshift añade un elemento al principio
// //Tambien se pueden concatenar dos string
// slice toma el elemnto desde donde se quieren tomar los valores hasta donde


// //para cambiar la posicion 2

// const data = [0,1,2,3,4,5];
// const newdata = data.slice(3,4); //ejemplo de slice
// console.log(newdata);

//_______________________________________________________________________________________-

const text = 'Ayer no pude dormir bien sas';
const array = text.split(' ');
// console.log(array);
console.log(array[array.length-2]);

// Ejemplo arriba de arreglos encontrar palabras


// const ages = [0, 1, 2, 3];
// const ages2 = [2, 4, 6, 8];
// encontrar los elementos que se encuentren en ambos arreglos y con ellos crear un arreglo nuevo


//______________________________________________________________________________________________________________________________________________
const newArray = [];
for(let i = 0; i <ages.length; i++) {
    const age = ages[i];
    for(let j = 0; j < ages2.length; j++) {
        const age2 = ages2[j];
        if(age === age2) {
            newArray.push(age);
        }
    }
}

console.log(newArray);
