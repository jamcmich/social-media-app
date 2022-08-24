import { PrismaClient } from '@prisma/client';

import fetchData from '../libs/fetchData';

const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

async function main() {
	const {
		data: {
			users: { data },
		},
	} = await fetchData();

	// console.log(data);

	const userData = data.map((user: any) => ({
		name: user.name,
		username: user.username,
		email: user.email,
		role: 'USER',
	}));

	await prisma.user.deleteMany();

	await prisma.user.createMany({
		data: userData,
	});
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
