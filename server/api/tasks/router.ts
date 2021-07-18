import { Request, Response, Router as ExpressRouter } from 'express'
import { Connection } from 'mysql2'

import toAsyncRouter from '../../middleware/asyncRouter'
import TaskController from './controller'
import TaskDAO from './model'
import { LoginError } from '../users/controller'

export function taskMasterRouter(db: Connection): TaskRouter {
  return new TaskRouter(new TaskController(new TaskDAO(db)))
}

export class TaskRouter {
  constructor(private controller: TaskController) {}

  public routes(): ExpressRouter {
    const router = toAsyncRouter(ExpressRouter())
    router.post('/task', this.createTask.bind(this))
    // router.put('/complete', this.completeTask.bind(this))
    // router.delete('/delete', this.deleteTask.bind(this))
    // Read about RESTful API design
    return router
  }

  private async createTask(req: Request, res: Response) {
    try {
      let token = req.headers['auth'] as string
      const taskId = await this.controller.createTask(req.body, token)
      console.log(taskId)
      return res.json({ status: 'ok', taskId: taskId })
    } catch (e) {
      if (e instanceof LoginError) {
        return res.status(403).json({ error: 'incorrect credentials' })
      }
      // return res.status(500).json({ error: 'server error' })
      throw e
    }
  }
}
