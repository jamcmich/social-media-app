const resolvers = {
	Query: {
		getUsers: async (_parent: any, _args: any, context: any, _info: any) => await context.prisma.user.findMany(),
	},
};

export default resolvers;
