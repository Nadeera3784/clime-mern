const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const _document_name = "users";

let ModelSchema = mongoose.Schema({
    name : {
		type : String,
		required : true
    },
	email : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true
	},
	refreshToken: {
		type: String
	},
	createdAt: {
		type: Date,
		default: Date.now,
	}
});

ModelSchema.pre('save', function (next) {
	var user = this;
	bcrypt.hash(user.password, 10, function (err, hash) {
		if (err) {
			return next(err);
		}
		user.password = hash;
		next();
	})
});

ModelSchema.static('findUserByID', function(id) {
	return new Promise((resolve, reject) => {
		mongoose.model(_document_name, ModelSchema).findOne({_id : id}).exec(function (err, user){
		    if (err) reject(err)
		    resolve(user);
		});
    });
});

ModelSchema.static('findAccountByEmail', function(email) {
	return new Promise((resolve, reject) => {
		mongoose.model(_document_name, ModelSchema).findOne({email : email}).exec(function (err, user){
		    if (err) reject(err)
		    resolve(user);
		});
    });
});

module.exports = mongoose.model(_document_name, ModelSchema);


