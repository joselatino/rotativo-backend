const {models} = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryService{
  constructor(){

  }

  async find(){
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id){
    const category = await models.Category.findByPk(id, {
      include: ['teams']
    });
    if(!category){
      throw boom.notFound('category not found');
    }
    return category
  }
  
  async create(data){
    const newCategory = await models.Category.create(data);
    return newCategory
  }

  async update(id,changes){
    const category = await this.findOne(id);
    const res = await category.update(changes);
    return res;
  }

  async delete(id){
    const category = await this.findOne(id);
    await category.destroy();
    return {id}
  }

}

module.exports = CategoryService;