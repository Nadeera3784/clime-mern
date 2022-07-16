const citySeeder = require("./City");
const {databaseInitializer}  = require('../services/Database');
const database_config         = require('../config/Database');

(async () => {
    databaseInitializer(database_config.database.mongodb.host);
    await citySeeder.run();
})();
  