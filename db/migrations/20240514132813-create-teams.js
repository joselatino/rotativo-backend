'use strict';

const {TeamSchema, TEAMS_TABLE} = require('./../models/team.model')
const {CategorySchema, CATEGORIES_TABLE} = require('./../models/category.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORIES_TABLE, CategorySchema);
    await queryInterface.createTable(TEAMS_TABLE, TeamSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TEAMS_TABLE);
    await queryInterface.dropTable(CATEGORIES_TABLE);
  }
};

