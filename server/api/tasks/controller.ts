import { LoginError } from '../users/controller'
import TaskDAO, { Task } from './model'

export default class TaskController {
  constructor(private dao: TaskDAO) {}

  public async createTask(task: Task, token: string): Promise<number> {
    const userId = await this.dao.getUserIdFromSession(token)
    if (userId === undefined) {
      throw new LoginError('User not found')
    }
    const taskId = await this.dao.createTask(task, userId)
    console.log(`controller ${taskId}`)
    return taskId
  }
}
