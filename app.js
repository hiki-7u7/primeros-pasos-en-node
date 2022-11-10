const { tablaDeMultiplicar } = require('./helpers/tabla');
const { argv } = require('./helpers/yargs')
const colors = require('colors')


tablaDeMultiplicar(argv.b, argv.l, argv.h)
    .then(res => console.log(res.rainbow))
    .catch(err => console.log(err))


