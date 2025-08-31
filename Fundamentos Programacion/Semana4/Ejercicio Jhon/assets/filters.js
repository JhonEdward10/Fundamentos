function filter(array, fn){
    const data = [];
    for(let i = 0; i < array.length; i++){
        const result = fn(array[i]);
        if(result === true){
            data.push(array[i]);
        }
    }
    return data;
}

function find(array, fn){
    for(let i = 0; i < array.length; i++){
        const result = fn(array[i]);
        if(result){
            return array[i];
        }
    }
}

//filter ejecuta una funcion por cada uno de los 
//elementos y retorna un arreglo con todos los elementos
//que cumplan con los parametros dados.

//Find devuelve al primer usuario que cumple la condicion,
//esta condicion es provista por el callback

export { filter, find };