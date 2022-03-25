const { postResolvers } = require('./post');
const { userResolvers } = require('./user');

const resolvers = {
	Query: {
		...postResolvers.Query,
	},
	Mutation: {
		...userResolvers.Mutation,
	},
};

module.exports = {
	resolvers,
};
