const Joi = require('joi');
const mongoose = require('mongoose');

const {genreSchema} = require('./genre')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        default: 0,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        default: 2.0,
        min: 0,
        max: 255
    }
})

const Movie = mongoose.model('Movie', movieSchema);

/**
 * Uses Joi to validate if the incoming body is in the correct format
 */
function validateMovie(movie){
    const schema = Joi.object({
        title: Joi.string().min(1).max(255).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    });

    return schema.validate(movie);
}

exports.movieSchema = movieSchema;
exports.Movie = Movie;
exports.validate = validateMovie;