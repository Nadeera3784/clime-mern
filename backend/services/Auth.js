const jwt          = require("jsonwebtoken");
const crypto       = require('crypto');
const app_config   = require('../config/App');
const AppConstants = require('../constants/AppConstants');
const User         = require('../services/User');
const Logger       = require('../services/Logger.js');

const tokenGuard = async (request, response, next) => {
  const authHeader = request.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(token == null){ 
    response.status(401).json({
        type: AppConstants.RESPONSE_ERROR,
        message : "The security token missing from your request",
        data : ""
    });  
    return;
  }
  const jwt_secret = app_config.app.jwt_secret || process.env.JWT_SECRET;
  jwt.verify(token, jwt_secret, async function(err, user) {    
      if(err){
          response.status(401).json({
              type: AppConstants.RESPONSE_ERROR,
              message : "The security token has been expired",
              data : err
          });  
          return;
      }
      const found_user =  await User.service.getById(user.id);
      if(found_user != undefined){
          if(found_user.status == 0){
              response.status(400).json({
                type   : AppConstants.RESPONSE_ERROR,
                message:  'The security token is invalid',
                data   : ""
              });
              return; 
          }
      }else{
          response.status(401).json({
              type: AppConstants.RESPONSE_ERROR,
              message : "The security token has been expired",
              data : {}
          });  
          return;
      }
      request.user = user;
      next();
  });
}

const tokenGenerate = async (user, response, next) => {
    const payload = {
        id: user._id
    };
    const jwt_secret    = app_config.app.jwt_secret || process.env.JWT_SECRET;
    const refreshToken  = crypto.randomBytes(64).toString('hex');
    jwt.sign(payload,jwt_secret, {expiresIn: '30d' }, (async function (error, token){
        if(error){
          Logger.info({message : error, context : 'AuthenticationTokenGenerate'});
          response.status(400).json({
            type : AppConstants.RESPONSE_ERROR,
            message:  'Something went wrong, please try again later',
            data : error
          });
          return;
        }
        let queryBuilder             = {};
        queryBuilder.refreshToken   = refreshToken;
        await User.service.update(user.id, queryBuilder);
        return response.status(200).json({
          type : AppConstants.RESPONSE_SUCCESS,
          message:  'You have been logged in successfully',
          data:  {
            accessToken  : token,
            refreshToken : refreshToken
          }
        });
      })
    );
}

module.exports = {
  tokenGenerate,
  tokenGuard
};
