const { app } = require('./app');


const { initModels } = require('./models/initModels');
const { db } = require('./utils/database.util');

const starServer = async() => {
    try {
        await db.authenticate();
        
        //Establish relation beetween models
        initModels();

        await db.sync();
    
        //Set Server to listen
        const PORT = 4000;
    
        app.listen(PORT, () => {
        console.log('Express app running')
        console.log(process.env);
    });
        
    } catch (error) {
        console.log(error);
    }
};

starServer();