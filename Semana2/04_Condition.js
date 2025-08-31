// const age = 20;
// const adult = age >= 18;

// if (adult){
//     console.log('Eres Aceptado');
// }

// else {
// console.log('No Eres Aceptado');
// }

//___________________________________________________________________________________________________________________________
// const age = 40;

// if(age >= 60){
//     console.log('Te vacunas en Enero');
// } 
// else if (age >= 40){
//     console.log('Te vacunas en Febrero');
// }
// else {
//     console.log('Te vacunas en Marzo');
// }

//_____________________________________________________________________________________________________________________________

// const users = [

//     {age: 20, pregnant: false},
//     {age: 40, pregnant: false},
//     {age: 60, pregnant: true}
    
// ];

// function x(user){
    

//     if(user.age >= 60 || user.pregnant) 
//     {
//     console.log('Te vacunas en Enero');
//      }
    
//     else if(user.age >= 40 && user.age <60) 
//     {
//     console.log('Te vacunas en febrero');
//      } 
    
//     else {
//     console.log('Te vacunas en marzo');
//     }
    
//     }

//    x(users[2]);


    
// si eres mayor o tienes 60 años o estás embarazada te vacunas en enero 

// si eres mayor o tienes 40 años pero menor de 60 te vacunas en febrero

// si eres menor de 40 te vacunas en marzo

//________________________________________________________________________________________________________________________

// const phrase = "Hola, me llamo Erik";
// const lastLetter = phrase.lastIndexOf(" ");
// const subText = phrase.substring(0, lastLetter);

// const lastLetterSubtext = subText.lastIndexOf(" ");
// const letter = subText.substring(lastLetterSubtext + 1);


// console.log(letter);

//____________________________________________________________________________________________________________________


// const lastLetter = phrase.lastIndexOf(" ");
// const letter = phrase.substr(14, lastLetter);

// console.log(letter);

// const phrase = "Hola me llamo Erik";

//_________________________________________________________________________________________________________________________

//Ejercicio 2 Replit

// function findLastWord(text) {

    
//     const lastLetter = text.lastIndexOf(" ");
//     const letter = text.substring(lastLetter +1);
    
//     console.log(letter);
    
//     }

//     findLastWord("Hola, me llamo Edward");

//_________________________________________________________________________________________________________________________
  
//Ejercicio 3 Replit

// function findSecondWord(text) {

    
//     const phrase = text.indexOf(" ");
//     const secondLetter = text.substring(phrase +1);

//     const secondPhrase = secondLetter.indexOf(" ");
//     const word = secondLetter.substring(0, secondPhrase);
   

    
//     console.log(word);
    
//     }

//     findSecondWord("hola juan jose mendez tovar");
//______________________________________________________________________________________________________-__________________

//ejercicio 4
// function sumValues(array) {

//     const sum = array[0] + array[1] + array[2];
//     return sum;
//   }

//_______________________________________________________________________________________________________________-
//ejercicio 5

// function getEmail(user) { 
 
//     const email = user.email;
    
//     return email;
//     }

//_____________________________________________________________________________________________________________________

// function getEmails(){

// for
// const emails = [];





//     return emails;
// }

//______________________________________________________________________________________________________________________

// tu función recibe una propiedad cualquiera y tienes que agregar esa propiedad y asignarle el valor de "Hola" en el objeto user
function addProperty(property) {
    const user = {}    
    user[property] = "Hola";
    console.log(user);
}


addProperty('email');
addProperty('name');
addProperty('age');


const balloons = [ 
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
    { color: 'yellow' },
    { color: 'red' },
    { color: 'yellow' },
];


// Contar cuantos globos hay de cada color, puede haber N cantidad de colores
const total = {};
for (let i = 0; i < balloons.length; i++) {
    const color = balloons[i].color;
    total[color] ? total[color]++ : total[color] = 1
    
}


// Encontrar cuál color se repite más veces
let number = 0;
let col = null;

for (let color in total) {
    if(total[color] > number) {
        number = total[color];
        col = color;
    }
}
console.log(col);
