import { Request, Response } from "express"

import {
  GetAllProductsDB
} from "../model/products.model.js"

export const GetAllProducts = (_req: Request, res: Response) => {
  let products = GetAllProductsDB()

  let responseToFront = {
    message: "Shipping of all products",
    data: products
  }

  res.status(200).send(responseToFront)
}