import { AllProducts } from "../database/products.repository.js"

export const GetAllProductsDB = () => {
  let products = AllProducts()

  return products
}