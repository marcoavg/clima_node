const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('./config/yargs').argv

let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion)
    let temperatura = await clima.getClima(coors.lag, coors.lng)

    return `el clima en ${ coors.direccion } es de ${ temperatura}`
}

getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(e => console.log(e))