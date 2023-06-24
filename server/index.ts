import express from 'express'
import mysql from 'mysql2'

import Config from './config'
import logMiddleware from './middleware/logger'
import errMiddleware from './middleware/errors'
// import { UserRouter } from './api/users/router';

import HealthRouter from './api/health/router'

import { createUserRouter } from './api/users/router'

const app = express()

const BASE_PATH = '/api'

async function main() {
  const config = Config.readFromEnvironment()
  const db = mysql.createConnection(config.dbOptions())
  const healthRouter = new HealthRouter(db)

  app.use(express.json())
  app.use(logMiddleware)

  app.use(BASE_PATH, healthRouter.routes())
  app.use(BASE_PATH, createUserRouter(db).routes())

  await app
    .listen(config.port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${config.port}`
      )
    })
    .on('error', (err) => {
      throw err
    })
}

main()
