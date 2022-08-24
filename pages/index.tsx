import type { GetServerSideProps, NextPage } from 'next';

import fetchData from '../libs/fetchData';
import styles from '../styles/Home.module.css';

interface Props {
	users: {
		data: {
			users: {
				data: object[];
			};
		};
	};
}

const Home: NextPage<Props> = (props) => {
	const {
		users: {
			data: { users },
		},
	} = props;

	return (
		<div>
			{users.data.map((user: any) => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await fetchData();

	return {
		props: {
			users: data,
		},
	};
};

export default Home;
