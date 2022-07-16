const mongoose   = require('mongoose');
const Logger     = require('../services/Logger.js');

const databaseInitializer = async function (uri) {
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(function(client){
        console.log('Mongoose connected:');
        return client;
    }).catch(function(error){
        Logger.info({message : error, context : 'databaseInitializer'});
        console.log('Mongoose connection URI error:',  error);
    }); 
}

module.exports = {
    databaseInitializer
};