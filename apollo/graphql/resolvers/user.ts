const resolvers = {
	Query: {
		users: async (_parent: any, _args: any, context: any, _info: any) => await context.prisma.user.findMany(),
		addresses: async (_parent: any, _args: any, context: any, _info: any) => await context.prisma.address.findMany(),
	},
};

export default resolvers;
