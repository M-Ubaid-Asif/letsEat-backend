import mongoose from "mongoose"
import db from "../connections/dbMaster"

const { Schema } = mongoose

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "name must be provided"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "email must be provided"],
		},
		password: {
			type: String,
			required: true,
		},
		contactNo: {
			type: Number,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		address2: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
		zip: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

export default db.model("User", userSchema)
