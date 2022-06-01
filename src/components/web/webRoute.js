import { Router } from "express"
import auth from "../../middlewares/auth.js"

const router = Router()

router.get("/", async (req, res) => {
	return res.render("home")
})

router.get("/login", async (req, res) => {
	res.render("user/login")
})

router.get("/register", async (req, res) => {
	return res.render("user/register")
})

router.get("/dashboard", auth, async (req, res) => {
	return res.render("dashboard")
})

router.get("/logout", async (req, res) => {
	res.clearCookie("jwt")
	return res.render("home")
})

export default router
