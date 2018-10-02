const opts = {
    create: {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of to-do'
        }
    },
    update: {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of to-do'

        },
        completed: {
            alias: 'c',
            default: true,
            desc: 'Completed to-do flag'
        }
    },
    delete: {
        description: {
            demand: true,
            alias: 'd',
            desc: 'Description of to-do'
        }
    }
}


const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of to-do'
}
const completed = {
    alias: 'c',
    default: true,
    desc: 'Completed to-do flag'
}

const argv = require('yargs')
    .command('create', 'create a to-do', opts.create)
    .command('list', 'to-do-list')
    .command('update', 'update to-do', { description, completed })
    .command('delete', 'delete to-do', opts.delete)
    .help()
    .argv;


module.exports = {
    argv
}