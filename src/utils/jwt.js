import jwt from "jsonwebtoken"
import config from "../config/config.js"

const signJwt = (payload) => {
	return jwt.sign(payload, config.jwt.secret, {
		expiresIn: config.jwt.ex,
	})
}

const verifyJwt = (token) => {
	return jwt.verify(token, config.jwt.secret, { complete: true })
}

export { signJwt, verifyJwt }
