import express from 'express'
import routes from './routes'

class App {
  constructor() {
    this.server = express()
    this.route()
    this.middlewares()
  }

  middlewares() {
    this.server.use(express.json())
  }

  route() {
    this.server.use(routes)
  }
}

export default new App().server.listen(5555)
