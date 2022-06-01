import mongoose from "mongoose"
import bcrypt from "bcrypt"
import db from "../connections/dbMaster.js"

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
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

userSchema.pre("save", async function (next) {
	if (this.isModified("password")) {
		const hashpass = await bcrypt.hash(this.password, 10)
		this.password = hashpass
		next()
	}
	next()
})

// compare password
userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password)
}

export default db.model("User", userSchema)
