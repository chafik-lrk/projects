const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    Nom: {
        type: String,
        required: true,
        unique: false,
    },
    prenom: {
        type: String,
        required: true,
        unique: false,
    },
    telephone: {
        type: Number,
        required: true,
        unique: false,

    },
    wilaya: {
        type: String,
        required: true,
        unique: false,
    },
    commune: {
        type: String,
        required: true,
        unique: false,
    },
    poids: {
        type: Number,
        required: true,
        unique: false,

    },

    type_denvoie: String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;