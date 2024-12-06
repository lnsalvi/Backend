import { Router } from "express"

import {
  CreateProduct,
  GetAllProducts
} from "../controllers/products.controller.js"

const productsRouter: Router = Router()

productsRouter.get('/', GetAllProducts)
productsRouter.post('/saveProduct', CreateProduct)

export default productsRouter
