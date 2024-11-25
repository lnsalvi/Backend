import { Router } from "express"

import {
  GetAllProducts
} from "../controllers/products.controller.js"

const productsRouter: Router = Router()

productsRouter.get('/', GetAllProducts)

export default productsRouter
