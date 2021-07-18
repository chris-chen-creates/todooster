import { Connection } from 'mysql2'

import { toObj, lastInsertId } from '../../utils/db'
import { LoginError } from '../users/controller'

export interface Task {
  id?: number
  task?: string
  isComplete?: boolean
  isDeleted?: boolean
}

export default class TaskDAO {
  constructor(private db: Connection) {}

  public async createTask(
    { task, isComplete }: Task,
    userId: number
  ): Promise<number> {
    console.log(`Before: ${JSON.stringify(this.db)}`)
    console.log(task, isComplete)
      await this.db.execute(
        'INSERT INTO Tasks(input, is_complete, created_by) VALUES (?, ?, ?)',
        [task, isComplete, userId]
      )
    console.log(`After: ${JSON.stringify(this.db)}`)
    return await lastInsertId(this.db)
  }

  public async getUserIdFromSession(token: string): Promise<number> {
    let userId = await this.db
      .promise()
      .query('SELECT id FROM Sessions WHERE session_token = ?', [token])
    let userMatch = toObj(userId)[0][0].id
    if (userMatch === undefined) {
      throw new LoginError('User does not have access')
    }
    return userMatch
  }
}
