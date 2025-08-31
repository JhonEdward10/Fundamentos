// let x = [];


// const d = () => {
//     return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         x = [{name: 'Erik'}, {name: 'George'} ];
//             resolve(x);
//         }, 5000);   
//     })
// }

// const e = () => {
//     console.log(x);
// }

// d()

//     .then((response) => console.log(response))
//     .catch((error) => console.log(error))

function printProducts(){
    console.log(products);
}

let products = [];

function getProducts(){
    axios.get('https://e-comerce-api-academlo.herokuapp.com/api/products')
    .then((response) =>
    {
        products = response.data
        printProducts(products);
    })

    .catch((error) => console.log(error))
}

// function printProducts(){
//     console.log(products);

// } 

getProducts();
//printProducts();

