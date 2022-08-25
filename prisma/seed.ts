// import PrismaClient constructor
import { PrismaClient } from '@prisma/client';

// import Falso for creating fake users
import { randUser } from '@ngneat/falso';
import { type } from 'os';

// instantiate PrismaClient
const prisma = new PrismaClient({
	log: ['query', 'info', 'warn', 'error'],
});

type User = {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	phone: string;
	img: string;
	username: string;
	address: Address;
};

type Address = {
	street: string;
	city: string;
	zipCode: string;
};

// define async function main() to send queries to database
async function main() {
	const user: User = randUser();

	const createUser = await prisma.user.create({
		data: {
			id: user.id,
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
			phone: user.phone,
			img: user.img,
			username: user.username,
			address: {
				create: {
					street: user.address.street,
					city: user.address.city,
					zipCode: user.address.zipCode,
				},
			},
		},
	});

	console.log(createUser);

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
