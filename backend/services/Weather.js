const axios = require('axios').default;

const app_config   = require('../config/App');
const Logger       = require('../services/Logger.js');

const fetch = async (latitude, longitude) => {
    try {
        if(app_config.app.weather_api_key){
            let data = axios.get('https://api.openweathermap.org/data/2.5/onecall',{
                params: {
                    'lat'     : latitude,
                    'lon'     : longitude,
                    'appid'   : app_config.app.weather_api_key,
                    'exclude' : 'minutely,hourly,daily',
                    'units'   : 'metric'
                }
            });
            return data;
        }else{
            Logger.info({message : 'missing openweathermap api key ', context : 'Weather@fetch'});
            return false;
        }
    } catch (error) {
        Logger.info({message : error, context : 'Weather@fetch'});
        return false;
    }
}

module.exports = {
    fetch
};
