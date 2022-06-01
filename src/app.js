import express from "express"
import morgan from "morgan"
import expressLayouts from "express-ejs-layouts"

import session from "express-session"
import flash from "connect-flash"
import router from "./components/index.js"
import cookieParser from "cookie-parser"


const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser())

// set public static path

app.use(express.static("public"))
app.use("/css", express.static("public"))
app.use("/img", express.static("public"))
app.use("/js", express.static("public"))

// setting up engine
app.set("view engine", "ejs")
app.use(expressLayouts)
app.set("layout", "./layouts/main.ejs")

// express sessions
app.use(
	session({
		secret: "secret",
		resave: true,
		saveUninitialized: true,
	})
)

// connect flash
app.use(flash())

// global  vars
app.use((req, res, next) => {
	res.locals.success_msg = req.flash("success_msg")
	res.locals.error_msg = req.flash("error_msg")
	res.locals.error = req.flash("error")
	next()
})

//routes
app.use("/", router)

// 404
app.use((req, res) => {
	res.render("errors/404")
})

export default app
