import type { GetServerSideProps, NextPage } from 'next';
import { prisma } from '../prisma/prisma';

import styles from '../styles/Home.module.css';

// interface Props {
// 	props: {
// 		users: {
// 			id: string;
// 			name: string;
// 			username: string;
// 			email: string;
// 		};
// 	};
// }

const Home: NextPage<any> = (props) => {
	console.log(props);
	console.log(props.users);

	return (
		<div>
			{props.users.map((user: any) => (
				<div key={user.id}>
					<p>{user.id}</p>
					<p>{user.name}</p>
					<p>{user.username}</p>
					<p>{user.email}</p>
				</div>
			))}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const users = await prisma.user.findMany();

	return {
		props: {
			users: JSON.parse(JSON.stringify(users)),
		},
	};
};

export default Home;
