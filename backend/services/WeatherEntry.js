const {WeatherEntry_Model}    = require('../models');

let Model = {};

Model.getAll = async function(query){
    return await WeatherEntry_Model.find(query);
}

Model.getById = async function(id){
    return await WeatherEntry_Model.findById(id);
}

Model.getByParameter = async function(query){
    return await WeatherEntry_Model.findOne(query);
}

Model.create = async function(query){
   return await WeatherEntry_Model.create(query);
}

Model.update = async function(id, query){
   return await WeatherEntry_Model.findOneAndUpdate(id, query, { new: true });
}

Model.delete = async function(id){
    return await WeatherEntry_Model.findOneAndRemove({_id: id});
}


Model.getAllWeatherEntries = async function(query, sort){
    return await WeatherEntry_Model.find(query).sort(sort).populate('city_id');
}

exports.service = Model;