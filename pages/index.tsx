import type { NextPage } from 'next';

import { client } from '../apollo/client';
import { typeDefs } from '../apollo/graphql/schemas/user';

import styles from '../styles/Home.module.css';

const Home: NextPage = ({ users }: any) => {
	console.log(users);

	return (
		<div>
			{users.users.data.map((user: any) => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: typeDefs,
	});

	return {
		props: {
			users: data,
		},
	};
}

export default Home;

