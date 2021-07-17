const Joi = require('joi');
const mongoose = require('mongoose');

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 50,
        match: /.*@.*/
    }
}));

function validateCustomer(customer){
    const schema = Joi.object({
        name: Joi.string().min(3).max(20).required(),
        email: Joi.string().min(3).max(50).required()
            .pattern(new RegExp('.*@.*')),
        isPremium: Joi.boolean()
    });

    return schema.validate(customer);
}

exports.Customer = Customer;
exports.validate = validateCustomer;