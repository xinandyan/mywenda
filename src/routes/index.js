import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.html')
})

// router.get('/demo', (req, res) => {
//   res.render('demo.html')
// })

// router.post('/demo', (req, res) => {
//   // console.log('post demo 执行了')
//   let data = ''
//   // console.log(req.body)
//   req.on('data', chunk => {
//     data += chunk
//   })
//   req.on('end', () => {
//     res.end(data)
//   })
// })

export default router
