import {
  AllProducts
} from "../repository/products.repository.js"

export const GetAllProductsDB = async () => {
  let productsToDB = await AllProducts()
  return productsToDB
}
