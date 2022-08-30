const resolvers = {
	Query: {
		getUsers: async (_parent: any, _args: any, context: any, _info: any) => await context.prisma.user.findMany(),
		getAddresses: async (_parent: any, _args: any, context: any, _info: any) => await context.prisma.address.findMany(),
	},
};

export default resolvers;
