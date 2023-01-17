import { Router, Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger'

export const EmployeeRouter: Router = Router()

EmployeeRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ message: 'OK' })
})

EmployeeRouter.get('/test', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Employee Check Success')
  res.status(200).send({ message: 'OK OK' })
})
