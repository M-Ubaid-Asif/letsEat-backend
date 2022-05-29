import { Router } from "express"

const router = Router()

router.get("/", async (req, res) => {
	res.render("home")
})

router.get("/login", async (req, res) => {
	res.render("user/login")
})

router.get("/register", async (req, res) => {
	res.render("user/register")
})

export default router
