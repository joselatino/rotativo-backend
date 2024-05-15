const {Router} = require('express')
const CategoryService = require('../services/category.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getCategorySchema, updateCategorySchema, createCategorySchema } = require('../schemas/categories.schema');

const router = Router()
const service = new CategoryService()

router.get('/', async(req,res, next)=> {
  try{
    const categories = await service.find()
    res.json(categories)
  }catch(err){
    next(err)
  }
})

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async(req, res, next)=> {
    try{
      const {id} = req.params;
      const category = await service.findOne(id)
      res.json(category)
    }catch(err){
      next(err);
    }
  }
)

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async(req, res, next)=> {
    try{
      const data = req.body;
      const newCategory = await service.create(data);
      res.status(201).json(newCategory);
    }catch(err){
      next(err);
    }
  }
)

router.patch('/',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async(req, res, next) => {
    try {
      const {id} = req.params;
      const changes = req.body;
      const category = await service.update(id, changes)
      res.json(category)
    } catch (err) {
      next(err);
    }
  }
)

router.delete('/',
  validatorHandler(getCategorySchema, 'params'),
  async(req, res, next) => {
    try {
      const {id} = req.params;
      const category = await service.delete(id);
      res.json(category)  
    } catch (err) {
      next(err);
    }
  }
)


module.exports = router