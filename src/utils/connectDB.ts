import mongoose from 'mongoose'
import config from '../config/environment'
import { logger } from './logger'

mongoose.set('strictQuery', false)

mongoose
  .connect(`${config.db}`)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => {
    logger.info('Could not connect to DB')
    logger.error(error)
    process.exit(1)
  })

// Failed connect to mongoDB because of the server problem
