const task = [
    { 
        title: "Task 1",
        description: "Task description"
    },

    { 
        title: "Task 2",
        description: "Task description"
    },

    { 
        title: "Task 3",
        description: "Task description"
    }
];


function printTask(task){

    //identificar el contenedor
    const container = document.getElementById("task-container");
    //Generar el Html
    let html = '';

    for(let i = 0; i < task.length; i++){
        html += `<div class="col-md-6 col-lg-4 mt-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${tasks[i].name}</h5>
                            <p class="card-text">${tasks[i].description}</p>
                        </div>
                    </div>
                </div>`
    }
    
    //Imprimir el Html
    container.innerHTML = html;

}


function getTask(){
    axios.get('https://tasks-crud.academlo.com/api/tasks')
        .then(function (response){
            const tasks = response.data;
            printTask(tasks);
        })
        .catch(function (error){
            console.log(error);
        })
}

function createTask(){
    const newTask = {
        name: 'Nueva Tarea',
        description: 'Description'
    }
    axios.post('https://tasks-crud.academlo.com/api/tasks', newTask)
        .then(function (response){
            console.log(response)
            alert('Se creo la tarea')
        })
        .catch(function (error){
            console.log(error)
            alert('No se pudo crear la tarea')
        })
}


getTask();
