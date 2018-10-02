const fs = require('fs');

let toDoList = [];


const guardarDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Not saved', err)
    })
}

const cargarDB = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }

    // console.log('List', toDoList);
}


const create = (description) => {
    cargarDB();
    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);
    guardarDB();
    return toDo;
}


const getList = () => {
    cargarDB();
    return toDoList;
}

const update = (description, completed = true) => {
    cargarDB();
    let index = toDoList.findIndex(toDo => toDo.description === description);
    if (index >= 0) {
        toDoList[index].completed = completed;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


const del = (description) => {
    cargarDB();

    // let newList = toDoList.filter(toDo => toDo.description !== description);
    // if (newList.length === toDoList.length) {
    //     return false;
    // } else {
    //     toDoList = newList;
    //     guardarDB();
    //     return true;
    // }



    let index = toDoList.findIndex(toDo => toDo.description === description);

    if (index >= 0) {
        toDoList.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}



module.exports = {
    create,
    getList,
    update,
    del
}