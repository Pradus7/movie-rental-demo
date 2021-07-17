const Joi = require('joi');
const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 20
    }
});

const Genre = mongoose.model('Genre', genreSchema);

/**
 * Uses Joi to validate if the incoming body is in the correct format
 */
function validateGenre(genre){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(genre);
}

exports.genreSchema = genreSchema;
exports.Genre = Genre;
exports.validate = validateGenre;