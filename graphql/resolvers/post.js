const Post = require('../../models/Post');

const postResolvers = {
	Query: {
		getPosts: async () => {
			try {
				const posts = await Post.find();
				return posts;
			} catch (error) {
				throw new Error(error);
			}
		},
	},
};

module.exports = {
	postResolvers,
};
