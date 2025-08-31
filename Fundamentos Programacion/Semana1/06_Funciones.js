
//Enviar un correo 

// //Tarea 1 Obtener el correo
// function getEmail(user){
//     const email = user.email;
//     console.log(email);
//     return email;

// }

// //Tarea 2 

// function sendEmail(){
// console.log('Enviar correo a ' + email);

// }


// const user = {name: 'Erik', email: 'erik@academlo.com'};

// const e = fsd;

// function solucion2()
// {
// console.log("solucion2");
// }



// console.log(solucion2);


function getAge(text) {
    const lastSpaceIndex = text.lastIndexOf(' ');
    const subs = text.substring(0, lastSpaceIndex);
    const lastSubsSpaceIndex = subs.lastIndexOf(' ');
    const age = Number(subs.substring(lastSubsSpaceIndex + 1));
    return age; //Toma las veces que sea necesario este codigo
}

const age1 = getAge('Hola, me llamo Erik y tengo 34 años');
const age2 = getAge('Hola, me llamo Daniel y tengo 25 años');
const age3 = getAge('Hola, me llamo Luis y tengo 40 años');


function sum(){

    const sum = age1 + age2 + age3;
    console.log(sum);
}

sum(10);



// Crear una función que reciba como parámetros las 3 edades e imprima la suma;



