// const age = 19;
// const age2 = "19";

// const b = true; // Si
// const c = false; //No
// const d = age == 30;

// const f = age != age2;
// const g = age >= age2;

// console.log(f);
// console.log(g);

// const age = 45;

// const b = age > 18 && age <= 30;
// //Todas las comparaciones que tenemos se deben cumplir para que sea true y si no se cumple una es false

// console.log(b);

const gender = "male";
const age = 16;


//Si son mujeres son aceptadas en el curso sin importar su edad
//si no son mujeres tienen que ser mayor de 18

// const accepted = gender === "female" || age > 18;
// console.log(!accepted);

const accepted = age > 18 && gender === "male";

const sendEmail = !accepted;
console.log(sendEmail);
