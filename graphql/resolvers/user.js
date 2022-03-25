/**
 * --- Packages ---
 * 
 * bcrypt:
 *      password hashing
 *      https://www.npmjs.com/package/bcrypt
 * 
 * jsonwebtoken:
 *      json encryption
 *      https://www.npmjs.com/package/jsonwebtoken
 */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../../config');

const User = require('../../models/User');

const userResolvers = {
	Mutation: {
		async register(
			_,
			{ registerInput: { username, password, confirmPassword, email } },
			context,
			info
		) {
			// TODO: Validate user data
			// TODO: Make sure user doesn't already exist
			// TODO: Hash password and create authentication token

			password = await bcrypt.hash(password, 12);

			const newUser = new User({
				username,
				password,
				email,
				createdAt: new Date().toISOString(),
			});

			const result = await newUser.save();

			const token = jwt.sign(
				{
					id: result.id,
					username: result.username,
					email: result.email,
				},
				SECRET_KEY,
				{ expiresIn: '1h' }
			);

			return {
				...result._doc,
				id: result._id,
				token,
			};
		},
	},
};

module.exports = {
    userResolvers
}
