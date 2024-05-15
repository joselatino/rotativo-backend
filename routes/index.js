const teamsRouter = require('./teams.router')
const categoriesRouter = require('./categories.router')

const { Router } = require('express')

function routerApi(app){
  const routerV1 = Router()

  app.use('/api/v1', routerV1)

  routerV1.use('/teams', teamsRouter)
  routerV1.use('/categories', categoriesRouter)
}

module.exports = routerApi