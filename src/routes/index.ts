import { Application, Router } from 'express'
import { EmployeeRouter } from './employee.route'
import { ProductRouter } from './product.route'

// Deklarasi route nya adalah sebuah array
// Nanti kalo misalnya routing nya udah banyak tinggal masukin ke ['endpointnya', nama routenya]
const _routes: Array<[string, Router]> = [
  ['/api', EmployeeRouter],
  ['/api', ProductRouter]
]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}
