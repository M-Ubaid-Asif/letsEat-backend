import User from "../../models/userModel.js"

const createUser = async (data) => {
	const user = await User.create(data)

	const userObj = user.toObject()
	delete userObj.password

	return userObj
}

const findUserBy = async (filter, project) => {
	const user = await User.findOne(filter, project)
	if (!user) {
		return false
	}
	return user
}

export { createUser, findUserBy }
