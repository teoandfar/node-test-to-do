const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

console.log(argv);

let command = argv._[0];
switch (command) {
    case 'create':
        console.log('Create');
        let task = toDo.create(argv.description);
        console.log(task);

        break;
    case 'list':
        console.log('List');
        let toDoList = toDo.getList();
        for (let todo of toDoList) {
            console.log('=====To Do====='.green);
            console.log(todo.description);
            console.log('Status', todo.completed);
            console.log('================'.green);
        }
        break;
    case 'update':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
        break;
    case 'delete':
        let deleted = toDo.del(argv.description);
        console.log(deleted);
        break;
    default:
        console.log('Not recognized');
        break;

}