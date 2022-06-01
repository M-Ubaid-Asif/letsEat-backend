import {
	validateLoginInput,
	validateRegisterInput,
} from "../../helpers/validation.js"
import { signJwt } from "../../utils/jwt.js"
import { createUser, findUserBy } from "./userService.js"

const register = async (req, res) => {
	console.log(req.body)
	const {
		firstname,
		lastname,
		email,
		password,
		confirmPassword,
		contactNo,
		address,
		address2,
		state,
		city,
		zip,
	} = req.body
	const name = `${firstname} ${lastname}`

	const { valid, errors } = validateRegisterInput(
		firstname,
		lastname,
		email,
		password,
		confirmPassword,
		contactNo,
		address,
		address2,
		state,
		city,
		zip
	)

	if (!valid) {
		return res.render("user/register", {
			errors,
			firstname,
			lastname,
			email,
			password,
			confirmPassword,
			contactNo,
			address,
			address2,
			state,
			city,
			zip,
		})
	}

	const isExist = await findUserBy({ email }, "email name")
	console.log(isExist)
	if (isExist) {
		return res.render("user/register", {
			errors: { emailExist: "Email is already registered" },
			firstname,
			lastname,
			contactNo,
			email,
			password,
			confirmPassword,
			address,
			address2,
			state,
			city,
			zip,
		})
	}

	const user = await createUser({
		name,
		email,
		password,
		confirmPassword,
		contactNo,
		address,
		address2,
		state,
		city,
		zip,
	})

	if (!user) {
		return res.render("user/register", {
			errors: { serverErr: "Somthing went wrong" },
			firstname,
			lastname,
			email,
			password,
			confirmPassword,
			address,
			address2,
			state,
			city,
			zip,
		})
	}

	req.flash("success_msg", "registration successful")
	res.redirect("/login")
}

const login = async (req, res) => {
	try {
		const { email, password } = req.body
		let { valid, errors } = validateLoginInput(email, password)

		if (!valid) {
			return res.render("user/login", { errors, email, password })
		}

		const user = await findUserBy({ email }, "name password email")
		errors = {}
		if (!user) {
			errors.msg = "Invalid Credentials"
			return res.render("user/login", { errors, email, password })
		}

		const isValid = await user.comparePassword(password)

		if (!isValid) {
			errors.msg = "Invalid Credentials"
			return res.render("user/login", { errors, email, password })
		}

		// sign jwt token
		const token = signJwt({ id: user._id, name: user.name, email })

		res.cookie("jwt", token)
		req.flash("success_msg", "login successful")
		res.redirect("/dashboard")
	} catch (error) {
		return res.render("errors/505")
	}
}
export { register, login }
