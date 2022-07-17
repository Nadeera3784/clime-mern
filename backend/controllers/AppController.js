const mongoose            = require('mongoose');

const AppConstants        = require('../constants/AppConstants.js');
const WeatherEntry        = require('../services/WeatherEntry');
const User        = require('../services/User');

const AppController = {

    async me(request, response, next){
        let user = await User.service.getByParameter({_id : mongoose.Types.ObjectId(request.user.id)});
        user.password = null;   
        user.refreshToken = null;             
        response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'User data has been fetched successfully',
            data: user
        });
        return
    },

    async weather(request, response, next){
       const {orderBy} = request.query;
       let orderQuery = {'createdAt' : -1};
       if(orderBy == 'value'){
         orderQuery = {'value' : -1};
       }
       const weatherEntries = await WeatherEntry.service.getAllWeatherEntries({user_id : mongoose.Types.ObjectId(request.user.id)}, orderQuery);
       let weatherEntriesArray = [];
       let data = [];
       if(weatherEntries){
            for (let index = 0; index < weatherEntries.length; index++) {
                const fahrenheit = ((weatherEntries[index].value * 1.8) + 32).toFixed(2);
                weatherEntriesArray.push({
                    id          : weatherEntries[index]._id,
                    city        : weatherEntries[index].city_id.name,
                    celsius     : weatherEntries[index].value + '°C',
                    fahrenheit  : fahrenheit + '°C',
                    date        :  weatherEntries[index].createdAt
                });
            }
            data = weatherEntriesArray.reduce((i, { id, city, celsius, fahrenheit, date}) => (
                { 
                ...i, 
                [city]: i[city] ? [ ...i[city], { id, celsius, fahrenheit, date }] : [ { id, celsius, fahrenheit, date } ],
                }
            ), {});
       }
        response.status(200).json({
            type : AppConstants.RESPONSE_SUCCESS,
            message:  'Weather data has been fetched successfully',
            data: data
        });
        return
    }
    
};
  
module.exports = AppController;