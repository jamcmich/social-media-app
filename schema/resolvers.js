import postSchema from '../models/Post.js';

const resolvers = {
	Query: {
		getPosts: async () => {
			try {
				const posts = await postSchema.find();
				return posts;
			} catch (error) {
				throw new Error(error);
			}
		},
	},
};

export { resolvers };
