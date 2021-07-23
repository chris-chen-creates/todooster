import mysql from 'mysql2'

import Config from '../../server/config'
import UserController, { LoginError } from '../../server/api/users/controller'
import UserDAO from '../../server/api/users/model'
import { response } from 'express'

const config = Config.readFromEnvironment()
const db = mysql.createConnection(config.dbOptions())
const controller = new UserController(new UserDAO(db))

test('user login works properly', async () => {
  const loginResponse = await controller.login({
    username: 'areef',
    password: 'zoinks',
  })

  expect(response.statusCode).toBe(200)
})

// test('user login throws incorrect credential error', async () => {
//   const loginResponse = await controller.login({
//     username: 'aria',
//     password: 'garfield',
//   })

//   expect(loginResponse).toThrowError('User not found')
// })
