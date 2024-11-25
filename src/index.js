import app from "./app.js"
import { PORT } from "./config.js"

async function main () {
  try {
    app.listen(PORT)
    console.log(`Server listening on port: ${PORT}.`)
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}.`)
  }
}

main()
