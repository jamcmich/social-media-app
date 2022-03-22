import mongoose from 'mongoose';
import Schema from 'mongoose';

const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	createdAt: String,
});

export { userSchema };
