import { Request, Response } from "express"

import {
  CreateProductToDb,
  GetAllProductsDB
} from "../database/products.database.js"

import { TProductNId } from "../../types/products.js"

export const CreateProduct = async (req: Request, res: Response) => {
  try {
    const { description, brand, amount, priceWNIva, stockNotice, stockAlarm } = req.body

    let productToSave: TProductNId = {
      description,
      brand,
      amount,
      priceWNIva,
      stockNotice,
      stockAlarm
    }

    let statusCreate = await CreateProductToDb(productToSave)

    let responseToFront = {
      message: statusCreate.toString()
    }

    res.status(200).send(responseToFront)
  } catch (error) {
    res.status(500).send({ message: 'The submitted record could not be saved to the database' })
  }
}

export const GetAllProducts = async (_req: Request, res: Response) => {
  let products = await GetAllProductsDB()
  let responseToFront = {
    message: "Shipping of all products",
    data: products
  }
  res.status(200).send(responseToFront)
}
