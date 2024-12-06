import { Sequelize } from "sequelize";

import {
  DB_DATABASE,
  PATH_APP
} from "../config.js";

let DbDatabase: string = DB_DATABASE === undefined ? '' : DB_DATABASE

export const sequelize = new Sequelize(DbDatabase, '', '', {
  dialect: "sqlite",
  storage: `${PATH_APP}/lubricentro.sqlite`
})