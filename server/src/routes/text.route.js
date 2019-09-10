import express from 'express'
import bodyparser from 'body-parser'
import taskAppliance from '../template/appliance.task'

const textRoutes = express.Router()
textRoutes.use(bodyparser.json())

textRoutes.post('/analysis', (req, res) => {
  const message = req.body.text
  const caseAppliance = taskAppliance(message)
  res.json({ anwser: caseAppliance })
})

export default textRoutes
