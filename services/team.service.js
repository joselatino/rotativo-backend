const boom = require('@hapi/boom')

const {models} = require('../libs/sequelize')

class TeamService{
  constructor(){
  
  }

  async find(){
    const res = await models.Team.findAll({
      include: ['category']
    });
    return res;
  }

  async findOne(id){  
    const team = await models.Team.findByPk(id);
    if(!team){
      throw boom.notFound('team not found');
    }
    return team;
  }

  async create(data){
    const newTeam = await models.Team.create(data);
    return newTeam;
  }

  async update(id, changes){
    const team = await this.findOne(id);
    const res = await team.update(changes);
    return res;
  }

  async delete(id){
    const team = await this.findOne(id);
    await team.destroy();
    return {id}
  }
}

module.exports = TeamService;