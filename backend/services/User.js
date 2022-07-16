const {User_Model}    = require('../models');

let Model = {};

Model.getAll = async function(query){
    return await User_Model.find(query);
}

Model.getById = async function(id){
    return await User_Model.findById(id);
}

Model.getByParameter = async function(query){
    return await User_Model.findOne(query);
}

Model.create = async function(query){
   return await User_Model.create(query);
}

Model.update = async function(id, query){
   return await User_Model.findOneAndUpdate(id, query, { new: true });
}

Model.delete = async function(id){
    return await User_Model.findOneAndRemove({_id: id});
}

Model.findByEmail = async function(email){
    return await User_Model.findAccountByEmail(email);
}

exports.service = Model;