require('dotenv').config();

module.exports = {
    app: {
      environment  :  process.env.APP_ENV  || 'development',
      base_url     :  process.env.APP_URL  || 'http://127.0.0.1:3030/',  
      port         :  process.env.APP_PORT || 3030,
      jwt_secret   :  process.env.JWT_SECRET,
      weather_api_key : process.env.WEATHER_API_KEY || null
    }
};  
  