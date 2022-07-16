const City = require("../services/City");

module.exports = {

    async run() {
        const cities = [
            {
                "name": "Colombo",
                "latitude": "6.927079",
                "longitude": "79.861244"
            },
            {
                "name": "Melbourne",
                "latitude": "-37.840935",
                "longitude": "144.946457"
            }
        ];

        for (let index = 0; index < cities.length; index++) {
            await City.service.create({
                "name"      : cities[index].name,
                "latitude"  : cities[index].latitude,
                "longitude" : cities[index].longitude
            });
        }
        console.log('citySeeder completed');
    }
}