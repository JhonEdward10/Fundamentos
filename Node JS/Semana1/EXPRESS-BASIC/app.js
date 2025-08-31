const express = require ('express');

//Routers
const { usersRouter } = require('./routes/users.routes');
const { postsRouter } = require('./routes/posts.routes');
const { commentsRouter } = require('./routes/comments.routes');

//init our Express app  
const app = express();

//Enable Express app to receive JSON data
app.use(express.json()); 

//Users and Posts  endPoint
app.use('/api/v1/users', usersRouter); 
app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/comment', commentsRouter);

//Catch non-existing endPoints
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        message: `${req.method} ${req.url} does not exists in our server`,
    });
});

module.exports = { app }; 