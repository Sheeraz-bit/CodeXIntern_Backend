import express from "express"

const app = express()

app.use(express.json({ limit: "100kb" }))
app.use(express.urlencoded({limit: "100kb", extended: true}))

import todoRoute from "./routes/todo.route.js"

app.use("/api/v1/todo", todoRoute)

export default app