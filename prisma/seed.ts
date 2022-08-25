// import PrismaClient constructor
import { PrismaClient } from '@prisma/client';

import fetchData from '../lib/fetchData';

// instantiate PrismaClient
const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

// define async function main() to send queries to database
async function main() {
	const getAllUsers = await prisma.user.findMany();

	console.log(getAllUsers);
}

// call function main()
main()
	.then(async () => {
		// close database connection when script terminates
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		// close database connection when script terminates
		await prisma.$disconnect();
		process.exit(1);
	});
