//import http from  'http'; ES6
const http = require('http'); // Common JS

//Dummy Data

const users = [
    {id: 1, name: 'Max', age: 21},
    {id: 2, name: 'Jhon', age: 22},
    {id: 3, name: 'Joe', age: 23}
];

const user = [
    {name: 'Edward', age: 21, email: 'Edward@gmail.com', password: '12345'}
];

const posts = [
    {id: 1, title: 'Post 1', content: 'This is Post 1'},
    {id: 2, title: 'Post 2', content: 'This is Post 2'},
    {id: 3, title: 'Post 3', content: 'This is Post 3'}
];


const server = http.createServer((request, response) => {

    // const url = request.url;
    // const method = request.method;
    
    const { url, method } = request;

    response.setHeader('Content-Type','application/json');

    //Get/users -> Return users array

    if(method === 'GET' && url === '/users'){
        response.write( JSON.stringify(users));
        response.end();
    }

    if(method === 'GET' && url === '/user'){
        response.write( JSON.stringify(user));
        response.end();
    }

    if(method === 'GET' && url === '/posts'){
        response.write( JSON.stringify(posts));
        response.end();
    } 

    // Return Error message

    else{
        response.write( 
            JSON.stringify( {
                message:`${method} ${url} not exists in our server` }) );
        response.end();
    }

});

server.listen(4000);




