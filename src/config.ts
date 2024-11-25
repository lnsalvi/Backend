import { config } from 'dotenv'

config()

const portEnv = Number(process.env.PORT)
export const PORT: number = typeof portEnv === 'number' ? portEnv : 3000

export const DB_DATABASE = process.env.DB_DATABASE
export const PATH_APP: string | undefined = process.env.PATH_APP
