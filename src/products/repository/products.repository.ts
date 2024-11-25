import {
  ProductSchema
} from "../models/products.model.js";

export const AllProducts = async () => {
  console.log("**** Repository Products ****");

  try {
    const productsDB = await ProductSchema.findAll()
    return productsDB
  } catch (error) {
    console.log(error); 
  }
}
