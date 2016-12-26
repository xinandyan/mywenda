import * as db from './db'

export function showRegister(req, res, next) {
  res.render('register.html')
}

export function showLogin(req, res, next) {
  res.render('login.html')
}

export function doRegister(req, res, next) {
  // 以下所有代码，一定要遵循错误优先的规则
  // 1. 接收客户端 post 请求体数据
  // 2. 对表单提交数据做基本校验
  // 3. 拿着经过 sanitize 过的数据，操作数据库
  //    3.1 校验用户民是否存在
  //        如果已存在，告诉用户
  //        如果不存在，将数据插入到数据库
  const body = req.body
  db.findOne('users', {
    username: body.username
  }, (err, doc) => {
    if (err) {
      throw err
    }
    if (doc) {
      return res.json({
        status: 'Error',
        error_code: 1001,
        error_message: '用户名已存在，请更新重试'
      })
    }
    db.insertOne('users', req.body, (err, result) => {
      if (err) {
        throw err
      }
      if (result.result.n !== 1) {
        return res.json({
          status: 'Error',
          error_code: 'UNKNOW',
          error_message: '注册失败，未知错误'
        })
      }
      res.json({
        status: 'OK',
        result: ""
      })
    })
  })
}
