const validateRegisterInput = (
	firstname,
	lastname,
	email,
	password,
	confirmPassword,
	address,
	address2,
	contactNo,
	state,
	city,
	zip
) => {
	let errors = {}
	if (
		!firstname ||
		!lastname ||
		!email ||
		!password ||
		!confirmPassword ||
		!address ||
		!address2 ||
		!contactNo ||
		!state ||
		!city ||
		!zip
	) {
		errors.emptyInput = "please fill all the fields"
	}

	if (firstname.trim() === "") {
		errors.firstname = "First name must not be empty"
	}
	if (lastname.trim() === "") {
		errors.lastname = "Last name must not be empty"
	}
	if (address.trim() === "") {
		errors.address = "Address must not be empty"
	}
	if (address2.trim() === "") {
		errors.address2 = "Address2 must not be empty"
	}

	if (contactNo.trim() === "") {
		errors.contactNo = "ContactNo must not be empty"
	}
	if (city.trim() === "") {
		errors.city = "City must not be emptty"
	}
	if (zip.trim() === "") {
		errors.zip = "Zip code must not be empty"
	}
	if (email.trim() === "") {
		errors.email = "Email must not be empty"
	} else {
		const regEx =
			/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
		if (!email.match(regEx)) {
			errors.email = "Invalid Email"
		}
	}

	if (password === "") {
		errors.password = "Password must not be empty"
	} else if (password !== confirmPassword) {
		errors.confirmPassword = "Password do not match"
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	}
}

const validateLoginInput = (password, email) => {
	let errors = {}
	if (email.trim() === "") {
		errors.email = "Email must not be empty"
	}
	if (password === "") {
		errors.password = "Password must not be empty"
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	}
}

export { validateRegisterInput, validateLoginInput }
