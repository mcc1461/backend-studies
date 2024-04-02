"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
    "plateNumber": "34ABC123",
    "brand": "Ford",
    "model": "Focus",
    "year": 2020,
    "isAutomatic": true,
    "pricePerDay": 249.99
}
{
    "plateNumber": "34ABC234",
    "brand": "Renault",
    "model": "Megane",
    "year": 2022,
    "isAutomatic": false,
    "pricePerDay": 199.99
}
{
    "plateNumber": "34ABC345",
    "brand": "Opel",
    "model": "Astra",
    "year": 2021,
    "isAutomatic": false,
    "pricePerDay": 189.99,
    "isAvailable": false
}
/* ------------------------------------------------------- */
// Firm Model:

const FirmSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },

    phone: {
        type: String,
        trim: true,
        required: true
    },

    address: {
        type: String,
        trim: true,
        required: true
    },

    // images: [],
    image: String,

    // createdId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },

    // updatedId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }

}, {
    collection: 'firms',
    timestamps: true
})

// Export:
module.exports = mongoose.model('Firm', FirmSchema)