import express from "express"
import morgan from "morgan"
import expressLayouts from "express-ejs-layouts"

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
// home routes

app.get("/", async (req, res) => {
	res.render("home")
})
export default app
