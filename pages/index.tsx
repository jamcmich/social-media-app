import type { NextPage } from 'next';
import { client } from '../apollo/client';
import { getLaunches } from '../apollo/graphql/queries/getLaunches';

import styles from '../styles/Home.module.css';

const Home: NextPage = ({ launches }: any) => {
	console.log(launches);

	return (
		<div>
			{launches.map((launch: any) => (
				<p key={launch.id}>{launch.mission_name}</p>
			))}
		</div>
	);
};

export async function getStaticProps() {
	const { data } = await client.query({
		query: getLaunches,
	});

	return {
		props: {
			launches: data.launchesPast,
		},
	};
}

export default Home;

