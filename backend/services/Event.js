const EventEmitter = require('events');
const mongoose     = require('mongoose');

const AppConstants = require('../constants/AppConstants');
const City         = require('../services/City');
const WeatherEntry = require('../services/WeatherEntry');
const Weather      = require('../services/Weather');

class IdentityEmitter extends EventEmitter {}
const identityEmitter = new IdentityEmitter();

const Events = module.exports;

Events.dispatch =  async function (type, payload) {
      
    switch(type) {
        case AppConstants.EVENT_UPDATE_WEATHER:
            this.onUpdateWeather(type, payload);
        break;
    }
}

Events.onUpdateWeather =  async function (type, payload) {

    identityEmitter.once(AppConstants.EVENT_UPDATE_WEATHER, async function(type, payload) {
        const {id} = payload;
        let cities = await City.service.getAll({});
        if(cities){
           for (let index = 0; index < cities.length; index++) {
                const weatherData = await Weather.fetch(cities[index].latitude, cities[index].longitude);
                if(weatherData){
                    await WeatherEntry.service.create({
                        value :  weatherData.data.current.temp,
                        user_id : mongoose.Types.ObjectId(id),
                        city_id : mongoose.Types.ObjectId(cities[index]._id)
                    });
                }
           }
        }
    });

    identityEmitter.emit(AppConstants.EVENT_UPDATE_WEATHER, type, payload);
}
