const mongoose = require('mongoose');

const _document_name = "cities";

let ModelSchema = mongoose.Schema({
    name : {
		type : String,
		required : true
    },
	latitude : {
		type : String,
		required : true
	},
	longitude : {
		type : String,
		required : true
	}
});

module.exports = mongoose.model(_document_name, ModelSchema);


