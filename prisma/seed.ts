// import PrismaClient constructor
import { PrismaClient } from '@prisma/client';

// import Faker for creating fake users
import { faker } from '@faker-js/faker';

// instantiate PrismaClient
const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

// define async function main() to send queries to database
async function main() {
	const deleteTables = async () => {
		await prisma.address.deleteMany();
		await prisma.user.deleteMany();
	};

	const generateUsers = async (len = 10) => {
		Array.from(Array(len).keys()).forEach(async () => {
			await prisma.user.create({
				data: {
					id: faker.unique(faker.datatype.uuid),
					email: faker.internet.email(),
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					phone: faker.phone.number(),
					img: faker.image.avatar(),
					username: faker.internet.userName(),
					address: {
						create: {
							id: faker.unique(faker.datatype.uuid),
							city: faker.address.city(),
							street: faker.address.street(),
							zipCode: faker.address.zipCode(),
						},
					},
				},
			});
		});

		// console.log(users);
	};

	await deleteTables();
	await generateUsers();
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
