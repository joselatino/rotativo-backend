const Joi = require('joi');

/* schemas para cada campo */

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const categoryId = Joi.number().integer();

/* schemas para rutas */

const getTeamSchema = Joi.object({
  id: id.required()
});


const createTeamSchema = Joi.object({
  name: name.required(),
  categoryId: categoryId.required(),
}); 

const updateTeamSchema = Joi.object({
  name,
  categoryId
});


module.exports = {createTeamSchema, updateTeamSchema, getTeamSchema};


