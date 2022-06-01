import express from "express"
import morgan from "morgan"
import expressLayouts from "express-ejs-layouts"
import router from "./components/index.js"

const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// set public static path

app.use(express.static("public"))
app.use("/css", express.static("public"))
app.use("/img", express.static("public"))
app.use("/js", express.static("public"))

// setting up engine
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/main.ejs")

// route
app.use("/", router)
export default app
