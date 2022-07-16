const mongoose = require('mongoose');

const _document_name = "weather_entries";

let ModelSchema = mongoose.Schema({
    value : {
		type : String,
		required : true
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users',
        required : true
	},
    city_id : {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'cities',
        required : true
	},
    createdAt: {
		type: Date,
		default: Date.now,
	}
});

module.exports = mongoose.model(_document_name, ModelSchema);


