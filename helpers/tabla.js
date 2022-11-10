const fs = require('fs');
const colors = require('colors')

const tablaDeMultiplicar = (base = 5, list, hasta = 10) => {

    return new Promise((resolve) => {
        let salida = '';
        let consola = '';

        for (let i = 0; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${`x`.green} ${i} ${`=`.green} ${base * i}\n`
        };

        fs.writeFileSync(`./salida/table-del-${base}.txt`, salida);

        if (list) {
            console.log('========================='.green)
            console.log(`TABLA DEL ${base}`.green)
            console.log('========================='.green)


            console.log(consola);
        }


        resolve(`Archivo : 'table-del-${base}.txt' creado`);
    })
}

module.exports = {
    tablaDeMultiplicar,
}