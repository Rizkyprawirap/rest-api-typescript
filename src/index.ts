import bodyParser from 'body-parser'
import express, { Application } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'
import cors from 'cors'

// Connect Database
import './utils/connectDB'

const app: Application = express()
const port: Number = 4000

// Parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS access handler
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

routes(app)

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`)
})
