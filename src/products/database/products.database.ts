import { TProductNId } from "../../types/products.js"

import {
  SaveProduct,
  AllProducts
} from "../repository/products.repository.js"

export const CreateProductToDb = async (product: TProductNId): Promise<boolean> => {
  try {
    await SaveProduct(product)
    return true
  } catch (error) {
    return false
  }
}

//Tipar esta funcion.
export const GetAllProductsDB = async () => {
  let productsToDB = await AllProducts()
  return productsToDB
}
