const {Router} = require('express');
const TeamService = require('../services/team.service');

const router = Router(); 
const service = new TeamService();
const validatorHandler = require('../middlewares/validator.handler')
const {getTeamSchema, createTeamSchema, updateTeamSchema} = require('../schemas/team.schema')

router.get('/', async(req, res, next) => {
  try {
    const teams = await service.find();
    res.json(teams);
  } catch (err) {
    next(err);
  }
});

router.get('/:id',
  validatorHandler(getTeamSchema, 'params'),
 async(req, res, next) => {
  try {
    const {id} = req.params;
    const team = await service.findOne(id);
    res.json(team);
  } catch (err) {
    next(err);
  }
});

router.post('/',
  validatorHandler(createTeamSchema, 'body'),
  async(req, res, next)=> {
    try{
      const data = req.body;
      const newTeam = await service.create(data);
      res.status(201).json(newTeam);
    }catch(err){
      next(err);
    }
})

router.patch('/:id',
  validatorHandler(getTeamSchema, 'params'),
  validatorHandler(updateTeamSchema, 'body'),
  async(req, res, next)=> {
    try {
      const {id} = req.params;
      const changes = req.body;
      const team = await service.update(id, changes)
      res.json(team);
    } catch (err) {
      next(err);
    }
})

router.delete('/:id',
  validatorHandler(getTeamSchema, 'params'),
  async(req,res, next)=>{
    try {
      const {id} = req.params;
      const team = await service.delete(id);
      res.json(team);

    } catch (err) {
      next(err);
    }
})



module.exports = router;