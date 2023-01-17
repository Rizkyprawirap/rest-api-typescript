import { Request, Response } from 'express'
import { createProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)
  if (error != null) {
    logger.error('ERR: product - create = ', error.details[0].message)
    return res.status(422).send({ status: true, statusCode: 422, data: {}, message: error.details[0].message })
  }
  logger.info('Success add new product')
  return res.status(200).send({ status: true, statusCode: 200, data: value, message: 'Add product success' })
}

export const getProduct = (req: Request, res: Response) => {
  const dataProducts = [
    { name: 'Sepatu', price: 200000 },
    { name: 'Kaos', price: 40000 }
  ]
  const {
    params: { name }
  } = req

  if (!name) {
    logger.info('Success get all product data')
    res.status(200).send({ status: true, statusCode: 200, data: dataProducts })
  }

  const filterProduct = dataProducts.filter((product) => {
    if (product.name === name) {
      return product
    }
  })

  if (filterProduct.length === 0) {
    logger.info('Data not found')
    res.status(404).send({ status: false, statusCode: 404, data: {} })
  }

  logger.info('Success get specific data')
  res.status(200).send({ status: true, statusCode: 200, data: filterProduct[0] })
}
