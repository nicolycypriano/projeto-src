import express from 'express'
const routes = express.Router()

routes.get('/', function (req, res) {
  res.json({ message: 'Hello vvvvvvvvvv' })
})

export default routes