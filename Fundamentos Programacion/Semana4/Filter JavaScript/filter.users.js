const users = [
    {name: "Jhon", lastname: "Mendez", email: "jhon@gmail.com", age: 22, testResult: 3},
    {name: "Jose", lastname: "Tovar", email: "jose@academlo.com", age: 15, testResult: 8},
    {name: "Eduar", lastname: "Medina", email: "eduar@academlo.com", age: 40, testResult: 9}

];



const result = users.filter(user => !user.email.endsWith("@academlo.com"));
console.log(result);

//filtrar usuarios que hayan pasado la prueba testResult
//filtrar usuarios que hayan pasado la prueba testResult y sean mayores de 20
//filtrar a los usuarios que no tengan usuario de academlo




