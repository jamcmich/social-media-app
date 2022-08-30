import type { GetServerSideProps, NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import Image from 'next/image';

import { prisma } from '../prisma/prisma';

import styles from '../styles/Home.module.css';

const UsersQuery = gql`
	query {
		users {
			id
			username
			img
		}
	}
`;

interface User {
	id: string
	email: string
	firstName: string
	lastName: string
	phone: string
	img: string
	username: string
}

const Home: NextPage<any> = (props) => {
	const { data, error, loading } = useQuery(UsersQuery);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Oops, something went wrong {error.message}...</p>;

	return (
		<div>
			{data.users.map((user: User) => (
				<div key={user.id}>
					<Image src={user.img} alt={`${user}'s image`} width={50} height={50} />
					<p>{user.username}</p>
				</div>
			))}
		</div>
	);
};

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const users = await prisma.user.findMany();

// 	return {
// 		props: {
// 			users: JSON.parse(JSON.stringify(users)),
// 		},
// 	};
// };

export default Home;
