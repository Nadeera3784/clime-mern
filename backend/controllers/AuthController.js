const {validationResult } = require('express-validator');
const bcrypt              = require('bcryptjs');
const AppConstants        = require('../constants/AppConstants.js');
const User                = require('../services/User.js');
const Logger              = require('../services/Logger.js');
const Auth                = require('../services/Auth');
const Event               = require('../services/Event');

const AuthController = {

    async register(request, response, next){
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            response.status(422).json({
              type : AppConstants.RESPONSE_ERROR,
              message:  'The given data was invalid',
              data:  errors.array()
            });
            return;
        }else{
            const {email, name, password} = request.body;
            let queryBuilder        = {};
            queryBuilder.name       = name;
            queryBuilder.email      = email;
            queryBuilder.password   = password;
            User.service.create(queryBuilder).then(async function(document){
                await Auth.tokenGenerate(document, response);
            }).catch(function(error){
                Logger.info({message : error, context : 'AuthController@register'});
                response.status(400).json({
                    type : AppConstants.RESPONSE_ERROR,
                    message:  'Something went wrong, please try again later',
                    data: error
                });
                return;
            });
        }
    },
    
    async login(request, response, next){
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            response.status(422).json({
              type : AppConstants.RESPONSE_ERROR,
              message:  'The given data was invalid',
              data:  errors.array()
            });
            return;
        }else{
            const {email, password} = request.body;
            User.service.getByParameter({email: email}).then(async function(document){
              if(!document){
                response.status(400).json({
                    type : AppConstants.RESPONSE_ERROR,
                    message:  'No user found',
                    data: null
                });
                return
              }
              bcrypt.compare(password, document.password, async function (error, result){
                if(result === true) {
                    Event.dispatch(AppConstants.EVENT_UPDATE_WEATHER, {id : document._id});
                    await Auth.tokenGenerate(document, response);
                }else{
                    response.status(400).json({
                        type : AppConstants.RESPONSE_ERROR,
                        message:  'Invalid Credentials',
                        data: error
                    });
                    return;
                }
              })
            }).catch(function(error){
                Logger.info({message : error, context : 'AuthController@login'});
                response.status(400).json({
                    type : AppConstants.RESPONSE_ERROR,
                    message:  'Something went wrong, please try again later',
                    data: error
                });
                return;
            });
        } 
    }
    
};
  
module.exports = AuthController;