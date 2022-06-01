import { verifyJwt } from "../utils/jwt.js"

const auth = async (req, res, next) => {
	try {
		const cookie = req.headers.cookie
		console.log("asdfaf")
		if (!cookie) {
			const unAuthError = {
				msg: "You are not authenticated please login",
			}
			return res.render("user/login", { unAuthError })
		}
		console.log("asdad", cookie)
		const jwtToken = cookie.split(" ")[1].split("=")[1]
		console.log("====", jwtToken)

		if (!jwtToken) {
			console.log("adafdadfagag")
			const unAuthError = {
				msg: "You are not authenticated please login",
			}
			return res.render("user/login", { unAuthError })
		}

		const decode = verifyJwt(jwtToken)

		if (!decode) {
			const unAuthError = { msg: "You are not authenticated please login" }
			return res.render("user/login", { unAuthError })
		}
		req.user = decode
		next()
	} catch (error) {
		const unAuthError = { msg: "You are not authenticated please login" }
		return res.render("user/login", { unAuthError })
	}
}

export default auth
