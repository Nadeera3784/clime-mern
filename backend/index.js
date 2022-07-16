const http       = require("http");
const path       = require("path");
const express    = require("express");
const bodyParser = require("body-parser");
const logger     = require('morgan');
const helmet     = require('helmet');
const cors       = require('cors');

const  {databaseInitializer}  = require('./services/Database');
const database_config         = require('./config/Database');
const AppConstants            = require('./constants/AppConstants.js');
const app_config              = require('./config/App');
const {authRoute, appRoute}   = require('./routes');

let App = express();

let dir_base = __dirname;

App.use(
    helmet({
      contentSecurityPolicy: false,
    })
);

if(app_config.app.environment == "development"){
    App.use(logger('dev'));
}

App.use(bodyParser.json());

App.use(bodyParser.urlencoded({
	extended: true
}));

App.use(cors());

databaseInitializer(database_config.database.mongodb.host);

App.use(express.static(path.join(dir_base, 'public')));

App.use((request, response, next) => {
    response.setHeader('Cache-Control', 'no-cache, no-store');
    next();
});

App.get('/', function(request, response, next){
    return response.status(200).json({
        type : AppConstants.RESPONSE_ERROR,
        data:  {
            name    : "Clime API",
            version : 'V.1.0.0'
        }
    });
});

App.get('/health', function (request, response) {
    return response.sendStatus(200);
});
    
App.use('/api/v1/', authRoute);
App.use('/api/v1/', appRoute);

App.get('*', (request, response) => {                       
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'));                               
});

App.disable('x-powered-by');

App.set('port', app_config.app.port);

http.createServer(App).listen(App.get('port'), function () {
	console.log("Express server listening on port " + App.get('port'));
});

module.exports = App;
