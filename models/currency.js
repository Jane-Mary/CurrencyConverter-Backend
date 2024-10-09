const { Schema, model } = require('mongoose');

const currencySchema = new Schema({
    name: {type: String, required: true},
    short_code: {type: String, required: true},
});

const Currency = model('currency' , currencySchema);

module.exports = Currency;