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

export { filter, find }