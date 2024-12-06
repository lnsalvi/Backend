import { TProductNId } from "../../types/products.js";

import {
  ProductSchema
} from "../models/products.model.js";

// CRUD (Create)
export const SaveProduct = async (product: TProductNId | any): Promise<boolean | undefined> => {
  try {
    await ProductSchema.create(product)
    return true
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
// CRUD (Create)

// CRUD (Read)
export const AllProducts = async () => {
  console.log("**** Repository Products ****");

  try {
    const productsDB = await ProductSchema.findAll()
    return productsDB
  } catch (error) {
    console.log(error); 
  }
}
// CRUD (Read)

// CRUD (Update)
// CRUD (Update)

// CRUD (Delete)
// CRUD (Delete)