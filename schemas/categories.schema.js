const Joi = require('joi');

/* cada campo */

const id = Joi.number().integer();
const name = Joi.string().min(3).max(25);


/* rutas */

const createCategorySchema = Joi.object({
  name: name.required()
})

const updateCategorySchema = Joi.object({
  name: name
})

const getCategorySchema = Joi.object({
  id: id.required()
});

module.exports = {createCategorySchema, updateCategorySchema, getCategorySchema};