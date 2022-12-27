import express from 'express'
import diaryRouter from './routes/diaries'

const PORT = 3000
const app = express()
app.use(express.json()) // middleware que transforma la req.body a un json

app.get('/ping', (_req, res) => {
  console.log('pinged!')
  res.send(`pong ${new Date().toLocaleDateString()}`)
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
