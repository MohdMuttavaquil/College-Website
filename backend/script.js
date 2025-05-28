import express from 'express'
import mongoose from 'mongoose'
import { studentmodle } from './components/student.js'
const app = express()
const port = 3000

app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/DMIC")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/dmic/adimission', (req, res) => {
  console.log(req.body)
  studentmodle.create(req.body)
    .then(res.send("your ragistration is completed"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})