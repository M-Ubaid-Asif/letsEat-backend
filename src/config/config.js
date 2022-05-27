import { config } from "dotenv"

config()

const db = {
	uri: process.env.MONGOURL,
	option: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
}

export default {
	db,
}
