import { config } from "dotenv"

config()

const db = {
	uri: process.env.MONGO_URI,
	option: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
}

const jwt = {
	secret: process.env.JWT_SECRET,
	ex: process.env.JWT_EXPIRES,
}

export default {
	db,
	jwt,
}
