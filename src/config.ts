import { config } from 'dotenv'

config()

export const PORT: string | undefined = process.env.PORT
export const DB_DATABASE: string | undefined = process.env.DB_DATABASE
export const DB_DIALECT: string | undefined = process.env.DB_DIALECT
export const PATH_APP: string | undefined = process.env.PATH_APP
