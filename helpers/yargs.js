const argv = require('yargs')
    .option({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'la base de la tabla de multiplicar'
        },
        'l': {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe: 'muestra la tabla de multiplicar'
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            describe: 'determina el limite de multiplicacion',
            default: 10
        }
    })
    .check((argv) => {
        if (isNaN(argv.b)) {
            throw `el argumento 'base' solo puede recibir numeros`
        }
        if (isNaN(argv.h)) {
            throw `el argumento 'hasta' solo puede recibir numeros`
        }
        return true
    })
    .argv

module.exports = {
    argv,
}    