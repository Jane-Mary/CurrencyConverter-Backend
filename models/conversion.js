const { Schema, model } = require('mongoose');

const conversionSchema = new Schema({
    from_amount: {type: Number, required: true},
    from_currency: {type: Schema.Types.ObjectId, ref: 'currency'},
    to_currency: {type: Schema.Types.ObjectId, ref: 'currency'},
    to_amount: {type: Number, required: true},
    rate: {type:Number, required: true},
});

const Conversion = model('conversion' , conversionSchema);

module.exports = Conversion;