const resolvers = {
	Query: {
		users: async (_parent: any, _args: any, context: any) => await context.prisma.user.findMany(),
	},
};

export default resolvers;
