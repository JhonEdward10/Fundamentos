// // si la ultima letra de un texto (string) cualquiera es la letra a

// //generar un boolean

// function ejercicio1(){

// const text = "Hola, me llamo Erik";
// const text2 = "Hola, me llamo Daniela";

// // Cual es la ultima letra y encontrarla 
// const lastPosition = text2.length -1;
// const lastCharacter = text2[lastPosition];

// //compararla con la a

// const UltimaLetra = lastCharacter === "c";

// console.log(UltimaLetra);

// }

// function ejercicio2(){
// //Problema 2

// const email = "erik@academlo.com";

// //decir si es un correo de academlo

// //1. determinar si termina que el correo termine en academlo.com

// //Usar metodos

// }

// function ejercicio3() {
//_____________________________________________________________________________________________________________________________
// // Problema 3

// //Extraer las edades de las siguientes frases (la edad siempre será la penúltima palabra) y sumarlas.
// const phraseN1 = "Hola, me llamo Erik y tengo 30 años"; // 28 y 27
// const phraseN2 = "Hola, me llamo Daniel y tengo 25 años";//30 y 29
// const phraseN3 = "Hola, me llamo Luis y tengo 40 años";//28 y 27
// // // ahora encontrar los numeros 

// const user1a = phraseN1.length -7;
// const user1b = phraseN1.length -6;

// const user2a = phraseN2.length -7;
// const user2b = phraseN2.length -6;

// const user3a = phraseN3.length -7;
// const user3b = phraseN3.length -6;
// // //concatenar los numeros

// const edad1 = phraseN1[user1a] + phraseN1[user1b];
// const edad2 = phraseN2[user2a] + phraseN2[user2b];
// const edad3 = phraseN3[user3a] + phraseN3[user3b];

// //Sumar los numeros
// const suma = Number(edad1) + Number(edad2) + Number(edad3);

// console.log(suma);

// }


//______________________________________________________________________________________________________________________________
// //Problema 4

// function ejercicio4(){
    
// const phrase = "Hola, me llamo Edward";

// const word = "Edward";

// const text = "Hello world, welcome to the universe.";

// const result = phrase.includes("Edward");
// const index = phrase.search("Edward");


// console.log(result, index);
// }

// ejercicio4();


// ejercicio4();

// function ejercicio5(){

// //Problema 5

// const phrase = "Hola, me llamo Edward y tengo 21 años";
// const remplazar = phrase.replace("años","meses");


// console.log(remplazar);
// }



// ejercicio3();
// ejercicio5();



// function ejercicio10(text){

//     console.log(text +" Jhon Edward, tienes una mente millonaria"); 

// }

// ejercicio10("Hola");


//___________________________________________________________________________________________________________________

// const phraseN1 = "Hola, me llamo Erik y tengo 30 años"; 
// const phraseN2 = "Hola, me llamo Daniel y tengo 25 años";
// const phraseN3 = "Hola, me llamo Luis y tengo 40 años";

// const text = 'Hola, me llamo Erik';

function getWord(text){

    const lastSpacePosition = text.lastIndexOf(' ');
    const subText = text.substring(0, lastSpacePosition);
    
    const lastSpaceSubText = subText.lastIndexOf(' ');
    const word = subText.substring(lastSpaceSubText + 1);
    console.log(word);

}
getWord("Hola, me llamo Erik");









