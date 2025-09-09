import connectDB from "./database/db.connect.js"
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config()
connectDB()
.then(() => {
    console.log(`Weare good to go for development ...`)
    app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port :: ${process.env.PORT}`)
    })
})
.catch((error) => {console.log(`ERROR :: ${error?.message}`)})