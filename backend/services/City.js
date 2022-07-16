const {City_Model}    = require('../models');

let Model = {};

Model.getAll = async function(query){
    return await City_Model.find(query);
}

Model.getById = async function(id){
    return await City_Model.findById(id);
}

Model.getByParameter = async function(query){
    return await City_Model.findOne(query);
}

Model.create = async function(query){
   return await City_Model.create(query);
}

Model.update = async function(id, query){
   return await City_Model.findOneAndUpdate(id, query, { new: true });
}

Model.delete = async function(id){
    return await City_Model.findOneAndRemove({_id: id});
}

exports.service = Model;