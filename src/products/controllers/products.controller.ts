import { Request, Response } from "express"

import {
  GetAllProductsDB
} from "../database/products.database.js"

export const GetAllProducts = async (_req: Request, res: Response) => {
  let products = await GetAllProductsDB()
  let responseToFront = {
    message: "Shipping of all products",
    data: products
  }
  res.status(200).send(responseToFront)
}
