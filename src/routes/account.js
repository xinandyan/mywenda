import express from 'express'
import * as account from '../controllers/account'

const router = express.Router()

router
  .get('/register', account.showRegister)
  .post('/register', account.doRegister)
  .get('/login', account.showLogin)

export default router
