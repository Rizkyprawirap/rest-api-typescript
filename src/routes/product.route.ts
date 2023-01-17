import { Router, Request, Response, NextFunction } from 'express'
import { createProductValidation } from '../validation/product.validation'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Success get product data')
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Book', price: '90000' }] })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = createProductValidation(req.body)
  if (error != null) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: true, statusCode: 422, data: {}, message: error.details[0].message })
  }
  logger.info('Success add new product')
  return res.status(200).send({ status: true, statusCode: 200, data: value, message: 'Add product success' })
})
