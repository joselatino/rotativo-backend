const {Model, DataTypes, Sequelize} = require('sequelize');
const {CATEGORIES_TABLE} = require('../models/category.model');

const TEAMS_TABLE = 'teams';

const TeamSchema = {
  id:{
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt:{
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  categoryId:{
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORIES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  }
}

class Team extends Model{
  static associate(models){
    this.belongsTo(models.Category, {as: 'category'});    
  }
  static config(sequelize){
    return {
      sequelize,
      tableName: TEAMS_TABLE,
      modelName: 'Team',
      timestamps: false,
    }
  }
}

module.exports = {TEAMS_TABLE, TeamSchema, Team}