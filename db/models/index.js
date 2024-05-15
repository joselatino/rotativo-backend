const {Team, TeamSchema} = require('./team.model')
const {Category, CategorySchema} = require('./category.model')

function setupModels(sequelize){
  Category.init(CategorySchema, Category.config(sequelize))
  Team.init(TeamSchema, Team.config(sequelize))

  Team.associate(sequelize.models);
  Category.associate(sequelize.models);

}

module.exports = setupModels