// import PrismaClient constructor
import { PrismaClient } from '@prisma/client';
import { type } from 'os';

// import Faker for creating fake users
import { faker } from '@faker-js/faker';

// instantiate PrismaClient
const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

// define async function main() to send queries to database
async function main() {
	const users = Array.from({ length: 100 }).map(() => ({
		id: faker.unique(faker.datatype.uuid),
		email: faker.internet.email(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		phone: faker.phone.number(),
		img: faker.image.avatar(),
		username: faker.internet.userName(),
	}))

	// const addresses = Array.from({ length: 100 }).map(() => ({
	// 	address: {
	// 		street: faker.address.street(),
	// 		city: faker.address.city(),
	// 		zipCode: faker.address.zipCode(),
	// 	},
	// }))

	const createUsers = await prisma.user.createMany({ data: users });
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
