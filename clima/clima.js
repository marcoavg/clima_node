//https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=cb32cd2a65910027c6bf9b5a8881bad6
const axios = require('axios')

const getClima = async(lat, lng) => {
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=cb32cd2a65910027c6bf9b5a8881bad6`)
    if (clima.cod === '400') {
        throw new Error(`No hay resultados `)
    }
    return clima.data.main.temp
}

module.exports = {
    getClima
}