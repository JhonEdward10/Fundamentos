// let number = localStorage.getItem("number");
// const user = JSON.parse(localStorage.getItem("user"));

let user = {
    name: 'Erik',
    email: 'erik@academlo.com'
};


if(sessionStorage.getItem('user')){
    user = JSON.parse(sessionStorage.getItem('user'));
}

const container = document.getElementById("container");
// container.innerHTML = number;
container.innerHTML = user.name;



// function changeValue(){
//     number = 10;
//     container.innerHTML = number;
//     localStorage.setItem("number", number);

// }

function changeValue(){
    user.name = 'George';
    const userAsText = JSON.stringify(user);
    sessionStorage.setItem("user", userAsText);

}

function deleteUser(){
    sessionStorage.removeItem('user');
}
